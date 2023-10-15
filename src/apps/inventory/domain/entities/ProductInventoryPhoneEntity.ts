import { ColorEntity } from './ColorEntity';
import { PhoneModelEntity } from './PhoneModelEntity';
import { ProviderEntity } from './ProviderEntity';
import { StorageEntity } from './StorageEntity';
import { StoreEntity } from './StoreEntity';
import { TypeDamageEntity } from './TypeDamageEntity';

export class ProductInventoryPhoneEntity {
  id: string;
  model: PhoneModelEntity;
  color: ColorEntity;
  storage: StorageEntity;
  provider?: ProviderEntity;
  imei: string;
  typeDamage?: TypeDamageEntity[];
  status: EStatusProductInventoryPhone;
  store: StoreEntity;
  price?: number;
  priceChange?: number;
  phoneStatus?: EPhoneStatus;
  typeUnlock?: ETypeUnlock;
  interestThreshold?: number;
  batteryPercentage?: number;
  createdAt?: Date;
  updatedAt?: Date;
  deletedAt?: Date;

  constructor(data: {
    id: string;
    model: PhoneModelEntity;
    color: ColorEntity;
    storage: StorageEntity;
    provider?: ProviderEntity;
    imei: string;
    typeDamage?: TypeDamageEntity[];
    status: EStatusProductInventoryPhone;
    price?: number;
    priceChange?: number;
    interestThreshold?: number;
    phoneStatus?: EPhoneStatus;
    typeUnlock?: ETypeUnlock;
    batteryPercentage?: number;
    store: StoreEntity;
    createdAt?: Date;
    updatedAt?: Date;
    deletedAt?: Date;
  }) {
    this.id = data.id;
    this.model = data.model;
    this.color = data.color;
    this.storage = data.storage;
    this.provider = data.provider;
    this.imei = data.imei;
    this.typeDamage = data.typeDamage;
    this.status = data.status;
    this.price = data.price;
    this.priceChange = data.priceChange;
    this.interestThreshold = data.interestThreshold;
    this.phoneStatus = data.phoneStatus;
    this.typeUnlock = data.typeUnlock;
    this.batteryPercentage = data.batteryPercentage;
    this.store = data.store;
    this.createdAt = data.createdAt;
    this.updatedAt = data.updatedAt;
    this.deletedAt = data.deletedAt;
  }
}

export class ProductInventoryPhoneQuery {
  color?: string;
  storage?: string;
  provider?: string;
  model?: string;
  status?: EStatusProductInventoryPhone;
  id?: string;
  imei?: string;
}

export enum EStatusProductInventoryPhone {
  SOLD = 'SOLD',
  DAMAGED = 'DAMAGED',
  REPORTED_DAMAGED = 'REPORTED_DAMAGED',
  IN_PROCESS_OF_SALE = 'IN_PROCESS_OF_SALE',
  REGISTERED = 'REGISTERED',
  CHANGE = 'CHANGE',
}

export enum ETypeUnlock {
  UNLOCK = 'UNLOCK',
  R_SIM = 'R_SIM',
  TELCEL = 'TELCEL',
  MOVISTAR = 'MOVISTAR',
  'AT&T' = 'AT&T',
}
export enum EPhoneStatus {
  NEW = 'NEW',
  'SEMI-NEW' = 'SEMI-NEW',
}
