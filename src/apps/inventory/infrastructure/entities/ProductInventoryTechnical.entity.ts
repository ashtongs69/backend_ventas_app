import {
  BaseEntity,
  Column,
  Entity,
  JoinTable,
  ManyToMany,
  ManyToOne,
  OneToMany,
  PrimaryColumn,
} from 'typeorm';

import { User } from 'src/apps/user/infrastructure/entities/user.entity';

import { Color } from './Color.entity';
import { PhoneChange } from './PhoneChange.entity';
import { PhoneModel } from './PhoneModel.entity';
import { ProductInventoryPhone } from './ProductInventoryPhone.entity';
import { Storage } from './Storage.entity';
import { TypeDamage } from './TypeDamage.entity';
import { EStatusProductInventoryTechnical } from '../../domain/entities/ProductInventoryTechnicalEntity';

@Entity()
export class ProductInventoryTechnical extends BaseEntity {
  @PrimaryColumn()
  id: string;

  @Column({ unique: true, type: 'varchar' })
  imei: string;

  @Column({ type: 'enum', enum: EStatusProductInventoryTechnical })
  status: EStatusProductInventoryTechnical;

  @ManyToOne(() => PhoneModel, (phoneModel) => phoneModel.productsTechnical, {
    nullable: false,
    eager: true,
  })
  model: PhoneModel;

  @ManyToOne(() => Color, (color) => color.productsTechnical, {
    nullable: false,
    eager: true,
  })
  color: Color;

  @ManyToOne(() => Storage, (storage) => storage.productsTechnical, {
    nullable: false,
    eager: true,
  })
  storage: Storage;

  @ManyToOne(
    () => ProductInventoryPhone,
    (productInventoryPhone) => productInventoryPhone.productsTechnical,
    { nullable: true, eager: true },
  )
  productInventoryPhone: ProductInventoryPhone;

  @ManyToOne(() => User, (user) => user.productsTechnical, {
    nullable: true,
    eager: true,
  })
  technical: User;

  @ManyToMany(() => TypeDamage, { nullable: true, eager: true })
  @JoinTable()
  typeDamage: TypeDamage[];

  @OneToMany(() => PhoneChange, (product) => product.productReceived)
  phoneChange: PhoneChange[];
}
