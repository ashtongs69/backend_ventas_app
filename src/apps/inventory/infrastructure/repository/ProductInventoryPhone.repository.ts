import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { In, Repository } from 'typeorm';

import {
  EStatusProductInventoryPhone,
  ProductInventoryPhoneEntity,
  ProductInventoryPhoneQuery,
} from '../../domain/entities/ProductInventoryPhoneEntity';
import { IProductInventoryPhoneRepository } from '../../domain/repositories/ProductInventoryPhoneRepository';
import { Color } from '../entities/Color.entity';
import { PhoneModel } from '../entities/PhoneModel.entity';
import { ProductInventoryPhone } from '../entities/ProductInventoryPhone.entity';
import { Provider } from '../entities/Provider.entity';
import { Storage } from '../entities/Storage.entity';

@Injectable()
export class ProductInventoryPhoneRepository
  implements IProductInventoryPhoneRepository
{
  constructor(
    @InjectRepository(ProductInventoryPhone)
    private productInventoryPhoneRepository: Repository<ProductInventoryPhone>,
    @InjectRepository(Color)
    private colorRepository: Repository<Color>,
    @InjectRepository(PhoneModel)
    private phoneModelRepository: Repository<PhoneModel>,
    @InjectRepository(Provider)
    private providerRepository: Repository<Provider>,
    @InjectRepository(Storage)
    private storageRepository: Repository<Storage>,
  ) {}
  async findManyById(ids: string[]): Promise<ProductInventoryPhoneEntity[]> {
    const items = await this.productInventoryPhoneRepository.findBy({
      id: In(ids),
    });
    return items.map((i) => new ProductInventoryPhoneEntity({ ...i }));
  }

  async updateStatus(
    id: string,
    status: EStatusProductInventoryPhone,
  ): Promise<ProductInventoryPhoneEntity | null> {
    try {
      const product = await this.productInventoryPhoneRepository.findOneOrFail({
        where: { id },
        relations: {
          model: true,
          color: true,
          storage: true,
          provider: true,
        },
      });

      if (!product) {
        return null;
      }
      product.status = status;

      await this.productInventoryPhoneRepository.save({
        ...product,
      });
      return new ProductInventoryPhoneEntity(product);
    } catch {
      return null;
    }
  }

  async findOne(
    values: Partial<ProductInventoryPhoneQuery>,
  ): Promise<ProductInventoryPhoneEntity> {
    const query = {
      ...values,
      color: undefined,
      phoneModel: undefined,
      provider: undefined,
      storage: undefined,
    };

    if (values.color) {
      query.color = await this.colorRepository.findOneBy({ id: values.color });
    }
    if (values.model) {
      query.phoneModel = await this.phoneModelRepository.findOneBy({
        id: values.model,
      });
    }
    if (values.provider) {
      query.phoneModel = await this.providerRepository.findOneBy({
        id: values.provider,
      });
    }
    if (values.storage) {
      query.storage = await this.storageRepository.findOneBy({
        id: values.storage,
      });
    }

    try {
      const product = await this.productInventoryPhoneRepository.findOneOrFail({
        where: { ...(query as any) },
        relations: {
          model: true,
          color: true,
          storage: true,
          provider: true,
        },
      });
      return new ProductInventoryPhoneEntity(product);
    } catch {
      return null;
    }
  }

  async find(
    values: Partial<ProductInventoryPhoneQuery>,
  ): Promise<ProductInventoryPhoneEntity[]> {
    const query = {
      ...values,
      color: undefined,
      phoneModel: undefined,
      provider: undefined,
      storage: undefined,
    };

    if (values.color) {
      const color = await this.colorRepository.findOneBy({ id: values.color });
      query.color = color;
    }
    if (values.model) {
      const phoneModel = await this.phoneModelRepository.findOneBy({
        id: values.model,
      });
      query.phoneModel = phoneModel;
    }
    if (values.provider) {
      const phoneModel = await this.providerRepository.findOneBy({
        id: values.provider,
      });
      query.phoneModel = phoneModel;
    }
    if (values.storage) {
      const storage = await this.storageRepository.findOneBy({
        id: values.storage,
      });
      query.storage = storage;
    }

    try {
      const products = await this.productInventoryPhoneRepository.find({
        where: { ...(query as any) },
        relations: {
          model: true,
          color: true,
          storage: true,
          provider: true,
        },
      });
      return products.map((i) => new ProductInventoryPhoneEntity(i));
    } catch {
      return [];
    }
  }

  async getAll(): Promise<ProductInventoryPhoneEntity[]> {
    const ProductInventoryPhones =
      await this.productInventoryPhoneRepository.find();
    return ProductInventoryPhones.map(
      (i) => new ProductInventoryPhoneEntity(i),
    );
  }
  async save(
    value: ProductInventoryPhoneEntity,
  ): Promise<ProductInventoryPhoneEntity> {
    try {
      const color = await this.colorRepository.findOneBy({
        id: value.color.id,
      });
      const model = await this.phoneModelRepository.findOneBy({
        id: value.model.id,
      });

      const provider = await this.providerRepository.findOneBy({
        id: value?.provider?.id,
      });

      const storage = await this.storageRepository.findOneBy({
        id: value.storage.id,
      });

      const item = await this.productInventoryPhoneRepository.save({
        ...value,
        color,
        provider,
        model,
        storage,
      });

      return new ProductInventoryPhoneEntity({ ...item });
    } catch (error) {
      return null;
    }
  }
}
