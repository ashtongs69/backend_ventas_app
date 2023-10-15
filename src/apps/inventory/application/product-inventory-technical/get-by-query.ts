import { Injectable } from '@nestjs/common';

import { IUseCase } from 'src/global';

import { ProductInventoryTechnicalEntity } from '../../domain/entities/ProductInventoryTechnicalEntity';
import { ProductInventoryTechnicalRepository } from '../../infrastructure/repository/ProductInventoryTechnical.repository';

@Injectable()
export class ProductInventoryTechnicalGetByQueryUseCase
  implements IUseCase<never, ProductInventoryTechnicalEntity[]>
{
  constructor(
    private productInventoryTechnicalEntity: ProductInventoryTechnicalRepository,
  ) {}

  async execute(): Promise<ProductInventoryTechnicalEntity[]> {
    return this.productInventoryTechnicalEntity.find({});
  }
}
