import { UUID } from 'node:crypto';
import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

@Entity('users')
export class User {
  @PrimaryGeneratedColumn('uuid')
  id: UUID;

  @Column('text', { nullable: false })
  name: string;

  @Column('text', { unique: true })
  username: string;

  @Column('text', { unique: true, select: false })
  email: string;

  @Column('text')
  password: string;

  @Column('bool', { default: true })
  isActive: string;

  @Column('text', { array: true, default: ['user'] })
  roles: string[];
}
