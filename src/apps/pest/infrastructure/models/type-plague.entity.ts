import { Column, Entity, PrimaryColumn } from 'typeorm';

@Entity()
export class TypePlague {
  @PrimaryColumn()
  id: string;

  @Column()
  name: string;
}
