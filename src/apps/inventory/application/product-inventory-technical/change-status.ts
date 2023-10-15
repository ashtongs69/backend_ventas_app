import { Injectable, NotFoundException } from '@nestjs/common';

import { IUseCase } from 'src/global';

import { ProductInventoryTechnicalEntity } from '../../domain/entities/ProductInventoryTechnicalEntity';
import { ChangeStatusProductInventoryTechnicalDTO } from '../../infrastructure/dto/product-inventory-technical.dto';
import { ProductInventoryTechnicalRepository } from '../../infrastructure/repository/ProductInventoryTechnical.repository';

interface IInput extends ChangeStatusProductInventoryTechnicalDTO {
  id: string;
}

@Injectable()
export class ProductInventoryTechnicalChangeStatusUseCase
  implements IUseCase<IInput, ProductInventoryTechnicalEntity>
{
  constructor(
    private productInventoryTechnicalEntity: ProductInventoryTechnicalRepository,
  ) {}

  async execute({
    status,
    id,
  }: IInput): Promise<ProductInventoryTechnicalEntity> {
    const product = await this.productInventoryTechnicalEntity.find({ id });

    if (!product) {
      throw new NotFoundException();
    }

    return await this.productInventoryTechnicalEntity.changeStatus(id, status);
  }
}
