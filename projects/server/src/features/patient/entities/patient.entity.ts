import { Patient as IPatient } from '@nla-tech/motion-report.types';
import { Exam } from 'src/features/exam/entities/exam.entity';
import { PrimaryGeneratedColumn, Column, Entity, OneToMany } from 'typeorm';

@Entity()
export class Patient implements Partial<IPatient> {
  @PrimaryGeneratedColumn()
  id?: string;

  @Column({ type: 'date', nullable: true })
  birthdate?: Date;

  @Column()
  name?: string;

  @Column()
  email?: string;

  @OneToMany(() => Exam, (exam) => exam.patient)
  exams: Exam[];
}
