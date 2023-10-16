import {
  Column,
  Entity,
  JoinTable,
  ManyToMany,
  ManyToOne,
  PrimaryColumn,
} from 'typeorm';

import { Client } from './client.entity';
import { Frecuency } from './frecuency.entity';
import { Recomendations } from './recomendations.entity';
import { TypePlague } from './type-plague.entity';
import { TypeService } from './type-service.entity';
import {
  EStatusPlague,
  ETypePlague,
} from '../../domain/entities/plague-entity';

@Entity()
export class Plague {
  @PrimaryColumn()
  id: string;

  @Column({ nullable: false, type: 'timestamptz' })
  date: Date;

  @Column({ nullable: false, type: 'int' })
  cost: number;

  @Column({ nullable: false, type: 'text' })
  observations: string;

  @Column({ enum: ETypePlague, nullable: false })
  type: ETypePlague;

  @Column({ enum: EStatusPlague, nullable: false })
  status: EStatusPlague;

  @ManyToOne(() => Client, (client) => client.plague, { eager: true })
  client: Client;

  @ManyToMany(() => TypePlague, { eager: true })
  @JoinTable()
  typePlague: TypePlague[];

  @ManyToMany(() => TypeService, { eager: true })
  @JoinTable()
  typeService: TypeService[];

  @ManyToMany(() => Frecuency, { eager: true })
  @JoinTable()
  frecuency: Frecuency[];

  @ManyToMany(() => Recomendations, { eager: true })
  @JoinTable()
  recomendations: Recomendations[];

  @Column({ nullable: true, type: 'boolean' })
  shouldFollowUp?: boolean;

  @Column({ nullable: true, type: 'int' })
  daysFollowUp?: number;

  @Column({ nullable: true, type: 'timestamptz' })
  dateFollowUp?: Date;
}
