import { Column, Entity, ManyToOne, PrimaryColumn } from 'typeorm';

import { ProductInventoryTechnical } from './ProductInventoryTechnical.entity';

@Entity()
export class TypeDamage {
  @PrimaryColumn()
  id: string;

  @Column({ nullable: false, type: 'varchar' })
  name: string;

  @Column({ nullable: false, type: 'varchar' })
  description: string;

  @ManyToOne(() => ProductInventoryTechnical, (phone) => phone.typeDamage)
  productTechnical: ProductInventoryTechnical;
}
