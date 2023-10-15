import { ContactCustomerEntity } from './ContactCustomerEntity';
import { ProductInventoryPhoneEntity } from './ProductInventoryPhoneEntity';
import { ProductInventoryTechnicalEntity } from './ProductInventoryTechnicalEntity';

export class PhoneChangeEntity {
  id: string;
  ticket: string;
  money: number;
  status: EStatusPhoneChange;
  productGived: ProductInventoryPhoneEntity;
  productReceived: ProductInventoryTechnicalEntity;
  customer: ContactCustomerEntity;

  constructor(data: {
    id: string;
    ticket: string;
    money: number;
    status: EStatusPhoneChange;
    productGived: ProductInventoryPhoneEntity;
    productReceived: ProductInventoryTechnicalEntity;
    customer: ContactCustomerEntity;
  }) {
    this.id = data.id;
    this.ticket = data.ticket;
    this.money = data.money;
    this.status = data.status;
    this.productReceived = data.productReceived;
    this.productGived = data.productGived;
    this.customer = data.customer;
  }
}

export class PhoneChangeQuery {
  id: string;
  ticket: string;
  money: number;
  status: EStatusPhoneChange;
  customer: ContactCustomerEntity;
}

export enum EStatusPhoneChange {
  ACCEPTED = 'ACCEPTED',
  CANCELLED = 'CANCELLED',
}
