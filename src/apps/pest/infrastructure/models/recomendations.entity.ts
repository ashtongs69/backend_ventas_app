import { Column, Entity, PrimaryColumn } from 'typeorm';

@Entity()
export class Recomendations {
  @PrimaryColumn()
  id: string;

  @Column()
  name: string;
}
