import { Column, Entity, ManyToOne, PrimaryColumn } from 'typeorm';

import { Role } from './role.entity';

@Entity()
export class User {
  @PrimaryColumn()
  id: string;

  @Column({ nullable: false })
  name: string;

  @Column({ nullable: false })
  phone: string;

  @Column({ nullable: false })
  email: string;

  @Column({ nullable: false })
  password: string;

  @Column({ nullable: true })
  refreshToken: string;

  @Column({ nullable: true })
  accessToken: string;

  @ManyToOne(() => Role, (role) => role.user, {
    nullable: true,
    eager: true,
  })
  role: Role;
}
