import { UserEntity } from 'src/apps/user/domain/entity/UserEntity';

import { ColorEntity } from './ColorEntity';
import { PhoneModelEntity } from './PhoneModelEntity';
import { ProductInventoryPhoneEntity } from './ProductInventoryPhoneEntity';
import { StorageEntity } from './StorageEntity';
import { TypeDamageEntity } from './TypeDamageEntity';

export class ProductInventoryTechnicalEntity {
  id: string;
  imei: string;
  status: EStatusProductInventoryTechnical;
  model: PhoneModelEntity;
  color: ColorEntity;
  storage: StorageEntity;
  typeDamage?: TypeDamageEntity[];
  productInventoryPhone?: ProductInventoryPhoneEntity;
  technical?: UserEntity;

  constructor(data: {
    id: string;
    imei: string;
    status: EStatusProductInventoryTechnical;
    model: PhoneModelEntity;
    color: ColorEntity;
    storage: StorageEntity;
    typeDamage?: TypeDamageEntity[];
    productInventoryPhone?: ProductInventoryPhoneEntity;
    technical?: UserEntity;
  }) {
    this.id = data.id;
    this.model = data.model;
    this.color = data.color;
    this.storage = data.storage;
    this.imei = data.imei;
    this.typeDamage = data.typeDamage;
    this.status = data.status;
    this.productInventoryPhone = data.productInventoryPhone;
    this.technical = data.technical;
  }
}

export class ProductInventoryTechnicalQuery {
  color?: string;
  storage?: string;
  model?: string;
  customer?: string;
  technical?: string;
  status?: EStatusProductInventoryTechnical;
  id?: string;
  imei?: string;
}

export enum EStatusProductInventoryTechnical {
  DAMAGED = 'DAMAGED',
  IN_PROCESS_REPAIR = 'IN_PROCESS_REPAIR',
  FIXED = 'FIXED',
}
