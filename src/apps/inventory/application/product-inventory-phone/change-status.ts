import { Injectable, NotFoundException } from '@nestjs/common';

import { IUseCase } from 'src/global';

import { ProductInventoryPhoneEntity } from '../../domain/entities/ProductInventoryPhoneEntity';
import { ChangeStatusProductInventoryPhoneDTO } from '../../infrastructure/dto/product-inventory-phone.dto';
import { ProductInventoryPhoneRepository } from '../../infrastructure/repository/ProductInventoryPhone.repository';

interface IInput extends ChangeStatusProductInventoryPhoneDTO {
  id: string;
}

@Injectable()
export class ProductInventoryPhoneChangeStatusUseCase
  implements IUseCase<IInput, ProductInventoryPhoneEntity>
{
  constructor(
    private productInventoryPhoneEntity: ProductInventoryPhoneRepository,
  ) {}

  async execute({ status, id }: IInput): Promise<ProductInventoryPhoneEntity> {
    const product = await this.productInventoryPhoneEntity.find({ id });

    if (!product) {
      throw new NotFoundException();
    }

    return await this.productInventoryPhoneEntity.updateStatus(id, status);
  }
}
