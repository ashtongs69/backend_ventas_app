import {
  Column,
  Entity,
  JoinTable,
  ManyToMany,
  ManyToOne,
  OneToMany,
  PrimaryColumn,
} from 'typeorm';

import { BaseEntity } from 'src/shared/base/base-entity';
import { DecimalTransformer } from 'src/shared/utils/decimalTransformer';

import { Color } from './Color.entity';
import { PhoneChange } from './PhoneChange.entity';
import { PhoneModel } from './PhoneModel.entity';
import { ProductInventoryTechnical } from './ProductInventoryTechnical.entity';
import { Provider } from './Provider.entity';
import { Storage } from './Storage.entity';
import { Store } from './Store.entity';
import { TypeDamage } from './TypeDamage.entity';
import {
  EPhoneStatus,
  EStatusProductInventoryPhone,
  ETypeUnlock,
} from '../../domain/entities/ProductInventoryPhoneEntity';
import { StoreEntity } from '../../domain/entities/StoreEntity';

@Entity()
export class ProductInventoryPhone extends BaseEntity {
  @PrimaryColumn()
  id: string;

  @Column({ unique: true, type: 'varchar' })
  imei: string;

  @Column({ type: 'enum', enum: EStatusProductInventoryPhone })
  status: EStatusProductInventoryPhone;

  @Column({
    type: 'decimal',
    precision: 10,
    scale: 2,
    default: 0.0,
    transformer: new DecimalTransformer(),
    nullable: true,
  })
  price?: number;

  @Column({
    type: 'decimal',
    precision: 10,
    scale: 2,
    default: 0.0,
    transformer: new DecimalTransformer(),
    nullable: true,
  })
  priceChange?: number;

  @Column({
    type: 'decimal',
    precision: 10,
    scale: 2,
    default: 0.0,
    transformer: new DecimalTransformer(),
    nullable: true,
  })
  interestThreshold?: number;

  @Column({ type: 'enum', enum: EPhoneStatus, nullable: true })
  phoneStatus?: EPhoneStatus;

  @Column({ type: 'enum', enum: ETypeUnlock, nullable: true })
  typeUnlock?: ETypeUnlock;

  @Column({ type: 'int', nullable: true })
  batteryPercentage?: number;

  @ManyToOne(() => Store, (store) => store.productsTechnical, {
    nullable: true,
    eager: true,
  })
  store: StoreEntity;

  @ManyToOne(() => PhoneModel, (phoneModel) => phoneModel.products, {
    nullable: false,
    eager: true,
  })
  model: PhoneModel;

  @ManyToOne(() => Color, (color) => color.products, {
    nullable: false,
    eager: true,
  })
  color: Color;

  @ManyToOne(() => Storage, (storage) => storage.products, {
    nullable: false,
    eager: true,
  })
  storage: Storage;

  @ManyToOne(() => Provider, (provider) => provider.products, {
    nullable: true,
    eager: true,
  })
  provider: Provider;

  @ManyToMany(() => TypeDamage, { nullable: true, eager: true })
  @JoinTable()
  typeDamage: TypeDamage[];

  @OneToMany(
    () => ProductInventoryTechnical,
    (product) => product.productInventoryPhone,
  )
  productsTechnical: ProductInventoryTechnical[];

  @OneToMany(() => PhoneChange, (product) => product.productGived)
  phoneChange: PhoneChange[];
}
