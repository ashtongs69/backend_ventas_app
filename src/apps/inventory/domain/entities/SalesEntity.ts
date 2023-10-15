import { UserEntity } from 'src/apps/user/domain/entity/UserEntity';

import { ContactCustomerEntity } from './ContactCustomerEntity';
import { ProductInventoryPhoneEntity } from './ProductInventoryPhoneEntity';

export class SalesEntity {
  id: string;
  products: ProductInventoryPhoneEntity[];
  user: UserEntity;
  customer: ContactCustomerEntity;
  total: number;

  constructor(data: {
    id: string;
    products: ProductInventoryPhoneEntity[];
    user: UserEntity;
    customer: ContactCustomerEntity;
    total: number;
  }) {
    this.id = data.id;
    this.products = data.products;
    this.user = data.user;
    this.customer = data.customer;
    this.total = data.total;
  }
}
