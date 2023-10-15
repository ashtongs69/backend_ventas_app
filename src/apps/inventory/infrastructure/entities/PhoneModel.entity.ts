import { Column, Entity, OneToMany, PrimaryColumn } from 'typeorm';

import { ProductInventoryPhone } from './ProductInventoryPhone.entity';
import { ProductInventoryTechnical } from './ProductInventoryTechnical.entity';

@Entity()
export class PhoneModel {
  @PrimaryColumn()
  id: string;

  @Column({ nullable: false, type: 'varchar' })
  name: string;

  @OneToMany(() => ProductInventoryPhone, (product) => product.model)
  products: ProductInventoryPhone[];

  @OneToMany(() => ProductInventoryTechnical, (product) => product.model)
  productsTechnical: ProductInventoryTechnical[];
}
