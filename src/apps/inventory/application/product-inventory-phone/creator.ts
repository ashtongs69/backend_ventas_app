import { Injectable, NotFoundException } from '@nestjs/common';

import { IUseCase } from 'src/global';
import { generateUUID } from 'src/shared/utils/generateUUID';

import {
  EStatusProductInventoryPhone,
  ProductInventoryPhoneEntity,
} from '../../domain/entities/ProductInventoryPhoneEntity';
import { CreateProductInventoryPhoneDTO } from '../../infrastructure/dto/product-inventory-phone.dto';
import { ColorRepository } from '../../infrastructure/repository/Color.repository';
import { PhoneModelRepository } from '../../infrastructure/repository/PhoneModel.repository';
import { ProductInventoryPhoneRepository } from '../../infrastructure/repository/ProductInventoryPhone.repository';
import { ProviderRepository } from '../../infrastructure/repository/Provider.repository';
import { StorageRepository } from '../../infrastructure/repository/Storage.repository';
import { StoreRepository } from '../../infrastructure/repository/Store.repository';
import { TypeDamageRepository } from '../../infrastructure/repository/TypeDamage.repository';

@Injectable()
export class ProductInventoryPhoneCreatorUseCase
  implements
    IUseCase<CreateProductInventoryPhoneDTO, ProductInventoryPhoneEntity>
{
  constructor(
    private phoneModelRepository: PhoneModelRepository,
    private colorRepository: ColorRepository,
    private storageRepository: StorageRepository,
    private providerRepository: ProviderRepository,
    private productInventoryPhoneRepository: ProductInventoryPhoneRepository,
    private storeRepository: StoreRepository,
    private typeDamageRepository: TypeDamageRepository,
  ) {}

  async execute(
    data: CreateProductInventoryPhoneDTO,
  ): Promise<ProductInventoryPhoneEntity> {
    const model = await this.phoneModelRepository.findById(data.model);

    if (!model) {
      throw new NotFoundException('No existe modelo');
    }

    const color = await this.colorRepository.findById(data.color);

    if (!color) {
      throw new NotFoundException('No existe color');
    }
    const storage = await this.storageRepository.findById(data.storage);

    if (!storage) {
      throw new NotFoundException('No existe almacenamiento');
    }
    const provider = await this.providerRepository.findById(data.provider);

    if (!provider) {
      throw new NotFoundException('No existe proveedor');
    }

    const store = await this.storeRepository.findById(data.store);

    if (!store) {
      throw new NotFoundException('No existe tienda');
    }

    const typeDamage = await this.typeDamageRepository.findManyById(
      data.typeDamage,
    );
    const entity = new ProductInventoryPhoneEntity({
      id: generateUUID(),
      model,
      color,
      storage,
      provider,
      imei: data.imei,
      status: EStatusProductInventoryPhone.REGISTERED,
      store,
      batteryPercentage: data.batteryPercentage,
      interestThreshold: data.interestThreshold,
      price: data.interestThreshold,
      phoneStatus: data.phoneStatus,
      priceChange: data.priceChange,
      typeUnlock: data.typeUnlock,
      typeDamage,
    });

    return await this.productInventoryPhoneRepository.save(entity);
  }
}
