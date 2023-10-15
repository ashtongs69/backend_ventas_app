import { Injectable, NotFoundException } from '@nestjs/common';

import { IUseCase } from 'src/global';
import { generateUUID } from 'src/shared/utils/generateUUID';

import {
  EStatusProductInventoryPhone,
  ProductInventoryPhoneEntity,
} from '../../domain/entities/ProductInventoryPhoneEntity';
import { EStatusProductInventoryTechnical } from '../../domain/entities/ProductInventoryTechnicalEntity';
import { StoreEntity } from '../../domain/entities/StoreEntity';
import { ProductInventoryPhoneRepository } from '../../infrastructure/repository/ProductInventoryPhone.repository';
import { ProductInventoryTechnicalRepository } from '../../infrastructure/repository/ProductInventoryTechnical.repository';

@Injectable()
export class ProductInventoryTechnicalFixPhoneUseCase
  implements IUseCase<string, void>
{
  constructor(
    private productInventoryTechnicalRepository: ProductInventoryTechnicalRepository,
    private productInventoryPhoneRepository: ProductInventoryPhoneRepository,
  ) {}

  async execute(productsTechnicalId: string): Promise<void> {
    const product = await this.productInventoryTechnicalRepository.findOne({
      id: productsTechnicalId,
    });

    if (!product) {
      throw new NotFoundException('no se encotro item tecnico');
    }

    product.status = EStatusProductInventoryTechnical.FIXED;

    const newProductPhone = new ProductInventoryPhoneEntity({
      id: generateUUID(),
      color: product.color,
      imei: product.imei,
      model: product.model,
      status: EStatusProductInventoryPhone.REGISTERED,
      storage: product.storage,
      store: new StoreEntity({ address: 'dsa', id: '', name: '' }),
    });

    await this.productInventoryPhoneRepository.save(newProductPhone);
    await this.productInventoryTechnicalRepository.save(product);
  }
}
