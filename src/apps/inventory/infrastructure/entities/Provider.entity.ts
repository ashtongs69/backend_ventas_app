import { Column, Entity, OneToMany, PrimaryColumn } from 'typeorm';

import { ProductInventoryPhone } from './ProductInventoryPhone.entity';

@Entity()
export class Provider {
  @PrimaryColumn()
  id: string;

  @Column({ nullable: false, type: 'varchar' })
  name: string;

  @Column({ nullable: false, type: 'varchar' })
  type: 'person' | 'company';

  @OneToMany(() => ProductInventoryPhone, (product) => product.provider)
  products: ProductInventoryPhone[];
}
