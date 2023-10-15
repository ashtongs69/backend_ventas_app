import { Column, Entity, ManyToOne, PrimaryColumn } from 'typeorm';

import { ContactCustomer } from './ContactCustomer.entity';
import { ProductInventoryPhone } from './ProductInventoryPhone.entity';
import { ProductInventoryTechnical } from './ProductInventoryTechnical.entity';
import { EStatusPhoneChange } from '../../domain/entities/PhoneChangeEntity';

@Entity()
export class PhoneChange {
  @PrimaryColumn()
  id: string;

  @Column({ nullable: false, type: 'varchar' })
  ticket: string;

  @Column({ nullable: false, type: 'int' })
  money: number;

  @Column({ nullable: false, type: 'enum', enum: EStatusPhoneChange })
  status: EStatusPhoneChange;

  @ManyToOne(() => ProductInventoryPhone, (product) => product.phoneChange, {
    nullable: false,
    eager: true,
  })
  productGived: ProductInventoryPhone;

  @ManyToOne(
    () => ProductInventoryTechnical,
    (product) => product.phoneChange,
    {
      nullable: false,
      eager: true,
    },
  )
  productReceived: ProductInventoryTechnical;

  @ManyToOne(
    () => ContactCustomer,
    (contactCustomer) => contactCustomer.phoneChange,
    { nullable: false, eager: true },
  )
  customer: ContactCustomer;
}
