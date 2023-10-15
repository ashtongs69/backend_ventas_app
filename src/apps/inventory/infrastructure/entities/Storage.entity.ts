import { Column, Entity, OneToMany, PrimaryColumn } from 'typeorm';

import { ProductInventoryPhone } from './ProductInventoryPhone.entity';
import { ProductInventoryTechnical } from './ProductInventoryTechnical.entity';

@Entity()
export class Storage {
  @PrimaryColumn()
  id: string;

  @Column({ nullable: false, type: 'int' })
  quantity: number;

  @OneToMany(() => ProductInventoryPhone, (product) => product.storage)
  products: ProductInventoryPhone[];

  @OneToMany(() => ProductInventoryTechnical, (product) => product.storage)
  productsTechnical: ProductInventoryTechnical[];
}
