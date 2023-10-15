import {
  Column,
  Entity,
  JoinTable,
  ManyToMany,
  ManyToOne,
  PrimaryColumn,
} from 'typeorm';

import { User } from 'src/apps/user/infrastructure/entities/user.entity';

import { ContactCustomer } from './ContactCustomer.entity';
import { ProductInventoryPhone } from './ProductInventoryPhone.entity';

@Entity()
export class Sales {
  @PrimaryColumn()
  id: string;

  @ManyToMany(() => ProductInventoryPhone, { nullable: false, eager: true })
  @JoinTable()
  products: ProductInventoryPhone[];

  @ManyToOne(() => User, (user) => user.sales, {
    nullable: false,
    eager: true,
  })
  user: User;

  @ManyToOne(() => ContactCustomer, (user) => user.sales, {
    nullable: false,
    eager: true,
  })
  customer: ContactCustomer;

  @ManyToMany(() => ProductInventoryPhone, { nullable: false, eager: true })
  @JoinTable()
  total: number;
}
