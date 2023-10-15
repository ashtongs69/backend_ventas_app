import { Injectable } from '@nestjs/common';

import { IUseCase } from 'src/global';

import { ProductInventoryPhoneEntity } from '../../domain/entities/ProductInventoryPhoneEntity';
import { QueryProductInventoryPhoneDTO } from '../../infrastructure/dto/product-inventory-phone.dto';
import { ProductInventoryPhoneRepository } from '../../infrastructure/repository/ProductInventoryPhone.repository';

@Injectable()
export class ProductInventoryPhoneGetByQueryUseCase
  implements
    IUseCase<QueryProductInventoryPhoneDTO, ProductInventoryPhoneEntity[]>
{
  constructor(
    private productInventoryPhoneEntity: ProductInventoryPhoneRepository,
  ) {}

  async execute(
    query: QueryProductInventoryPhoneDTO,
  ): Promise<ProductInventoryPhoneEntity[]> {
    return this.productInventoryPhoneEntity.find(query);
  }
}
