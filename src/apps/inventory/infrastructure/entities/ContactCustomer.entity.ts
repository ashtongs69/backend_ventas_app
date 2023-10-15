import { Column, Entity, OneToMany, PrimaryColumn } from 'typeorm';

import { PhoneChange } from './PhoneChange.entity';
import { Sales } from './Sales.entity';

@Entity()
export class ContactCustomer {
  @PrimaryColumn()
  id: string;

  @Column({ nullable: false, type: 'varchar' })
  name: string;

  @Column({ nullable: false, type: 'varchar' })
  phoneNumber: string;

  @Column({ nullable: false, type: 'varchar' })
  address: string;

  @OneToMany(() => PhoneChange, (phoneChange) => phoneChange.customer)
  phoneChange: PhoneChange;

  @OneToMany(() => Sales, (sales) => sales.customer)
  sales: Sales;
}
