import { Column, Entity, OneToMany, PrimaryColumn } from 'typeorm';

import { ProductInventoryPhone } from './ProductInventoryPhone.entity';
import { ProductInventoryTechnical } from './ProductInventoryTechnical.entity';

@Entity()
export class Color {
  @PrimaryColumn()
  id: string;

  @Column({ nullable: false, type: 'varchar' })
  name: string;

  @OneToMany(() => ProductInventoryPhone, (product) => product.color)
  products: ProductInventoryPhone[];

  @OneToMany(() => ProductInventoryTechnical, (product) => product.color)
  productsTechnical: ProductInventoryTechnical[];
}
