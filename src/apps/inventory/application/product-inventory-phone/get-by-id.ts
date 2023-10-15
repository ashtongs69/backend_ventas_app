import { Injectable } from '@nestjs/common';

import { IUseCase } from 'src/global';

import { ProductInventoryPhoneEntity } from '../../domain/entities/ProductInventoryPhoneEntity';
import { ProductInventoryPhoneRepository } from '../../infrastructure/repository/ProductInventoryPhone.repository';

@Injectable()
export class ProductInventoryPhoneGetByIdUseCase
  implements IUseCase<string, ProductInventoryPhoneEntity>
{
  constructor(
    private productInventoryPhoneEntity: ProductInventoryPhoneRepository,
  ) {}

  async execute(id: string): Promise<ProductInventoryPhoneEntity> {
    return this.productInventoryPhoneEntity.findOne({ id });
  }
}
