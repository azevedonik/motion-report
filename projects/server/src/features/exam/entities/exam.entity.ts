import { Column, Entity, ManyToOne, PrimaryGeneratedColumn } from 'typeorm';
import { Exam as IExam } from '@nla-tech/motion-report.types';
import { Patient } from 'src/features/patient/entities/patient.entity';

@Entity()
export class Exam implements IExam {
  @PrimaryGeneratedColumn()
  id?: string;

  @Column()
  shoes: string;

  @Column()
  speed: number;

  @Column({ type: 'jsonb' })
  datapoints: JSON;

  @ManyToOne(() => Patient, (patient) => patient.exams)
  patient: Patient;
}
