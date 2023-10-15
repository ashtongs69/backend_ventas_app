import { Column, Entity, PrimaryColumn } from 'typeorm';

@Entity()
export class ReportDamage {
  @PrimaryColumn()
  id: string;

  @Column({ type: 'varchar' })
  name: string;

  @Column({ type: 'varchar' })
  description: string;
}
