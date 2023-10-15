import { Column, Entity, OneToMany, PrimaryColumn } from 'typeorm';

import { Plague } from './plague.entity';

@Entity()
export class Client {
  @PrimaryColumn()
  id: string;

  @Column({ nullable: false })
  name: string;

  @Column({ nullable: false })
  address: string;

  @Column({ nullable: false })
  phone: string;

  @OneToMany(() => Plague, (plague) => plague.client)
  plague: Plague[];
}
