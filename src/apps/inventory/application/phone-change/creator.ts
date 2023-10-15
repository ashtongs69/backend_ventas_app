import {
  BadRequestException,
  Injectable,
  NotFoundException,
} from '@nestjs/common';

import { IUseCase } from 'src/global';
import { generateUUID } from 'src/shared/utils/generateUUID';

import {
  EStatusPhoneChange,
  PhoneChangeEntity,
} from '../../domain/entities/PhoneChangeEntity';
import {
  EStatusProductInventoryTechnical,
  ProductInventoryTechnicalEntity,
} from '../../domain/entities/ProductInventoryTechnicalEntity';
import { CreatePhoneChangeDto } from '../../infrastructure/dto/phone-change';
import { ColorRepository } from '../../infrastructure/repository/Color.repository';
import { ContactCustomerRepository } from '../../infrastructure/repository/ContactCustomer.repository';
import { PhoneChangeRepository } from '../../infrastructure/repository/PhoneChange.repository';
import { PhoneModelRepository } from '../../infrastructure/repository/PhoneModel.repository';
import { ProductInventoryPhoneRepository } from '../../infrastructure/repository/ProductInventoryPhone.repository';
import { ProductInventoryTechnicalRepository } from '../../infrastructure/repository/ProductInventoryTechnical.repository';
import { StorageRepository } from '../../infrastructure/repository/Storage.repository';
import { TypeDamageRepository } from '../../infrastructure/repository/TypeDamage.repository';

@Injectable()
export class PhoneChangeCreatorUseCase
  implements IUseCase<CreatePhoneChangeDto, PhoneChangeEntity>
{
  constructor(
    private productInventoryPhoneRepository: ProductInventoryPhoneRepository,
    private productInventoryTechnicalRepository: ProductInventoryTechnicalRepository,
    private contactCustomerRepository: ContactCustomerRepository,
    private phoneChange: PhoneChangeRepository,
    private phoneModelRepository: PhoneModelRepository,
    private colorRepository: ColorRepository,
    private storageRepository: StorageRepository,
    private typeDamageRepository: TypeDamageRepository,
  ) {}

  async execute(data: CreatePhoneChangeDto): Promise<PhoneChangeEntity> {
    // CREAR REGISTRO DE INVENTARIO TECNICO

    const colorTechnical = await this.colorRepository.findById(
      data.productReceived.color,
    );

    if (!colorTechnical) {
      throw new NotFoundException('No se encontro colorTechnical');
    }

    const modelTechnical = await this.phoneModelRepository.findById(
      data.productReceived.model,
    );
    if (!modelTechnical) {
      throw new NotFoundException('No se encontro modelTechnical');
    }

    const storageTechnical = await this.storageRepository.findById(
      data.productReceived.storage,
    );

    if (!storageTechnical) {
      throw new NotFoundException('No se encontro storageTechnical');
    }

    const productGived = await this.productInventoryPhoneRepository.findOne({
      id: data.productGived,
    });

    if (!productGived) {
      throw new NotFoundException('No se encontro product gived');
    }

    const typeDamageTechnical = await this.typeDamageRepository.findManyById(
      data.productReceived.typeDamage,
    );

    const validationImei =
      await this.productInventoryTechnicalRepository.findOne({
        imei: data.productReceived.imei,
      });

    if (validationImei) {
      throw new BadRequestException('imei no valido');
    }

    const technicalProduct = new ProductInventoryTechnicalEntity({
      id: generateUUID(),
      color: colorTechnical,
      model: modelTechnical,
      storage: storageTechnical,
      typeDamage: typeDamageTechnical,
      status: EStatusProductInventoryTechnical.DAMAGED,
      imei: data.productReceived.imei,
    });

    const productReceived = await this.productInventoryTechnicalRepository.save(
      technicalProduct,
    );

    const customer = await this.contactCustomerRepository.findOne({
      id: data.customer,
    });

    if (!customer) {
      throw new NotFoundException('No se encontro customer');
    }

    const entity = new PhoneChangeEntity({
      id: generateUUID(),
      ticket: generateUUID(),
      status: EStatusPhoneChange.ACCEPTED,
      ...data,
      customer,
      productGived,
      productReceived,
    });

    return await this.phoneChange.save(entity);
  }
}
