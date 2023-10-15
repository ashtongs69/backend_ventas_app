import { Column, Entity, PrimaryColumn } from 'typeorm';

@Entity()
export class Frecuency {
  @PrimaryColumn()
  id: string;

  @Column()
  name: string;
}
