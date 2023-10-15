import { Injectable, NotFoundException } from '@nestjs/common';

import { IUseCase } from 'src/global';

import { ProductInventoryPhoneEntity } from '../../domain/entities/ProductInventoryPhoneEntity';
import { UpdateProductInventoryPhoneDTO } from '../../infrastructure/dto/product-inventory-phone.dto';
import { ColorRepository } from '../../infrastructure/repository/Color.repository';
import { PhoneModelRepository } from '../../infrastructure/repository/PhoneModel.repository';
import { ProductInventoryPhoneRepository } from '../../infrastructure/repository/ProductInventoryPhone.repository';
import { ProviderRepository } from '../../infrastructure/repository/Provider.repository';
import { StorageRepository } from '../../infrastructure/repository/Storage.repository';
import { StoreRepository } from '../../infrastructure/repository/Store.repository';
import { TypeDamageRepository } from '../../infrastructure/repository/TypeDamage.repository';

interface IInput {
  id: string;
  data: UpdateProductInventoryPhoneDTO;
}

@Injectable()
export class ProductInventoryPhoneUpdatorUseCase
  implements IUseCase<IInput, ProductInventoryPhoneEntity>
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

  async execute({ data, id }: IInput): Promise<ProductInventoryPhoneEntity> {
    const phone = await this.productInventoryPhoneRepository.findOne({ id });
    if (!phone) throw new NotFoundException('No existe telefono');

    Object.assign(phone, data);

    const model = await this.phoneModelRepository.findById(data.model);
    if (!model && data.model) throw new NotFoundException('No existe modelo');

    const color = await this.colorRepository.findById(data.color);
    if (!color && data.color) throw new NotFoundException('No existe color');

    const storage = await this.storageRepository.findById(data.storage);
    if (!storage && data.storage)
      throw new NotFoundException('No existe almacenamiento');

    const provider = await this.providerRepository.findById(data.provider);
    if (!provider && data.provider)
      throw new NotFoundException('No existe proveedor');

    const store = await this.storeRepository.findById(data.store);
    if (!store && data.store) throw new NotFoundException('No existe tienda');

    if (data.model) phone.model = model;

    if (data.color) phone.color = color;

    if (data.storage) phone.storage = storage;

    if (data.provider) phone.provider = provider;

    if (data.store) phone.store = store;

    if (data.typeDamage) {
      const typeDamage = await this.typeDamageRepository.findManyById(
        data.typeDamage,
      );
      phone.typeDamage = typeDamage;
    }

    return await this.productInventoryPhoneRepository.save(phone);
  }
}
