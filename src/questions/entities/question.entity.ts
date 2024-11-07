import { Subject } from 'src/subjects/entities';
import {
  Column,
  Entity,
  ManyToOne,
  OneToMany,
  PrimaryGeneratedColumn,
} from 'typeorm';
import { Answers } from './answers.entity';

@Entity()
export class Question {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @Column('text', { unique: true })
  text: string;

  @ManyToOne(() => Subject)
  subject: Subject;

  @OneToMany(() => Answers, (answers) => answers.question)
  answers: Answers[];
}
