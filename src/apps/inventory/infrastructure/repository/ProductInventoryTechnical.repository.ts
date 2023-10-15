import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';

/* import { User } from 'src/apps/user/infrastructure/entities/user.entity'; */

import { UserEntity } from 'src/apps/user/domain/entity/UserEntity';

import {
  EStatusProductInventoryTechnical,
  ProductInventoryTechnicalEntity,
  ProductInventoryTechnicalQuery,
} from '../../domain/entities/ProductInventoryTechnicalEntity';
import { IProductInventoryTecnicalRepository } from '../../domain/repositories/ProductInventoryTecnicalRepository';
import { Color } from '../entities/Color.entity';
import { ContactCustomer } from '../entities/ContactCustomer.entity';
import { PhoneModel } from '../entities/PhoneModel.entity';
import { ProductInventoryTechnical } from '../entities/ProductInventoryTechnical.entity';
import { Storage } from '../entities/Storage.entity';

@Injectable()
export class ProductInventoryTechnicalRepository
  implements IProductInventoryTecnicalRepository
{
  constructor(
    @InjectRepository(ProductInventoryTechnical)
    private productInventoryTechnicalRepository: Repository<ProductInventoryTechnical>,
    @InjectRepository(Color)
    private colorRepository: Repository<Color>,
    @InjectRepository(PhoneModel)
    private phoneModelRepository: Repository<PhoneModel>,
    /* @InjectRepository(User)
    private userRepository: Repository<User>, */
    @InjectRepository(Storage)
    private storageRepository: Repository<Storage>,
    @InjectRepository(ContactCustomer)
    private contactCustomerRepository: Repository<ContactCustomer>,
  ) {}
  async updateTechnical(id: string, technical: UserEntity): Promise<void> {
    const product = await this.productInventoryTechnicalRepository.findOne({
      where: { id },
    });

    Object.assign(product, { technical });

    await this.productInventoryTechnicalRepository.save(product);
  }

  async save(
    data: ProductInventoryTechnicalEntity,
  ): Promise<ProductInventoryTechnicalEntity | null> {
    try {
      const item = await this.productInventoryTechnicalRepository.save(data);
      return new ProductInventoryTechnicalEntity({ ...item });
    } catch (error) {
      return null;
    }
  }
  async changeStatus(
    id: string,
    status: EStatusProductInventoryTechnical,
  ): Promise<ProductInventoryTechnicalEntity> {
    try {
      const product =
        await this.productInventoryTechnicalRepository.findOneOrFail({
          where: { id },
          relations: {
            color: true,
            storage: true,
            model: true,
            productInventoryPhone: true,
            technical: true,
            typeDamage: true,
          },
        });

      if (!product) {
        return null;
      }
      product.status = status;

      await this.productInventoryTechnicalRepository.save({
        ...product,
      });
      return new ProductInventoryTechnicalEntity(product);
    } catch {
      return null;
    }
  }
  async findOne(
    values: Partial<ProductInventoryTechnicalQuery>,
  ): Promise<ProductInventoryTechnicalEntity> {
    const query = {
      ...values,
      color: undefined,
      phoneModel: undefined,
      technical: undefined,
      storage: undefined,
      customer: undefined,
    };

    if (values.color) {
      query.color = await this.colorRepository.findOneBy({ id: values.color });
    }
    if (values.model) {
      query.phoneModel = await this.phoneModelRepository.findOneBy({
        id: values.model,
      });
    }
    /*   if (values.technical) {
      query.technical = await this.userRepository.findOneBy({
        id: values.technical,
      });
    } */
    if (values.customer) {
      query.customer = await this.contactCustomerRepository.findOneBy({
        id: values.customer,
      });
    }
    if (values.storage) {
      query.storage = await this.storageRepository.findOneBy({
        id: values.storage,
      });
    }

    try {
      const product =
        await this.productInventoryTechnicalRepository.findOneOrFail({
          where: { ...(query as any) },
          relations: {
            model: true,
            color: true,
            storage: true,
            productInventoryPhone: true,
            technical: true,
            typeDamage: true,
          },
        });
      return new ProductInventoryTechnicalEntity(product);
    } catch {
      return null;
    }
  }
  async find(
    values: Partial<ProductInventoryTechnicalQuery>,
  ): Promise<[] | ProductInventoryTechnicalEntity[]> {
    const query = {
      ...values,
      color: undefined,
      phoneModel: undefined,
      technical: undefined,
      storage: undefined,
      customer: undefined,
    };

    if (values.color) {
      query.color = await this.colorRepository.findOneBy({ id: values.color });
    }
    if (values.model) {
      query.phoneModel = await this.phoneModelRepository.findOneBy({
        id: values.model,
      });
    }
    /* if (values.technical) {
      query.technical = await this.userRepository.findOneBy({
        id: values.technical,
      });
    } */
    if (values.customer) {
      query.customer = await this.contactCustomerRepository.findOneBy({
        id: values.customer,
      });
    }
    if (values.storage) {
      query.storage = await this.storageRepository.findOneBy({
        id: values.storage,
      });
    }

    try {
      const products = await this.productInventoryTechnicalRepository.find({
        where: { ...(query as any) },
        relations: {
          model: true,
          color: true,
          storage: true,
          productInventoryPhone: true,
          technical: true,
          typeDamage: true,
        },
      });
      return products.map(
        (product) => new ProductInventoryTechnicalEntity(product),
      );
    } catch {
      return [];
    }
  }
}
