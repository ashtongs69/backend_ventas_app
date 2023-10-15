import { Column, Entity, PrimaryColumn } from 'typeorm';

@Entity()
export class TypeService {
  @PrimaryColumn()
  id: string;

  @Column()
  name: string;

  @Column({ nullable: false, type: 'int' })
  price: number;
}
