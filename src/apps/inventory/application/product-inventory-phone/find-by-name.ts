import { Injectable } from '@nestjs/common';

import { IUseCase } from 'src/global';

import { ProductInventoryPhoneRepository } from '../../infrastructure/repository/ProductInventoryPhone.repository';

interface IResponse {
  id: string;
  name: string;
  price: number;
  quantity: number;
  total: number;
}

@Injectable()
export class ProductInventoryPhoneGetByNameUseCase
  implements IUseCase<string, IResponse[]>
{
  constructor(
    private productInventoryPhoneEntity: ProductInventoryPhoneRepository,
  ) {}

  async execute(name: string): Promise<IResponse[]> {
    const items = await this.productInventoryPhoneEntity.find({});

    const formatItems = items.map((i) => {
      return {
        id: i.id,
        name: `${i.model.name} ${i.color.name} ${i.storage.quantity}GB / ${i.imei} / ${i.typeUnlock} `,
        price: i.price,
        quantity: 1,
        total: i.price,
      } as IResponse;
    });

    const filteredItems = formatItems.filter((i) =>
      i.name.toLowerCase().includes(name.toLowerCase()),
    );

    return filteredItems;
  }
}
