import { Column, Entity, OneToMany, PrimaryColumn } from 'typeorm';

import { ProductInventoryPhone } from './ProductInventoryPhone.entity';

@Entity()
export class Store {
  @PrimaryColumn()
  id: string;

  @Column({ nullable: false, type: 'varchar' })
  name: string;

  @Column({ nullable: false, type: 'varchar' })
  address: string;

  @OneToMany(() => ProductInventoryPhone, (product) => product.store)
  productsTechnical: ProductInventoryPhone[];
}
