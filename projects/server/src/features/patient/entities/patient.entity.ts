import { Patient as IPatient } from '@nla-tech/motion-report.types';
import { CommonEntity } from 'src/common/common-entity.entity';
import { Exam } from 'src/features/exam/entities/exam.entity';
import { Column, Entity, OneToMany } from 'typeorm';

@Entity()
export class Patient extends CommonEntity implements Partial<IPatient> {
  @Column({ type: 'date', nullable: true })
  birthdate?: Date;

  @Column()
  name?: string;

  @Column()
  email?: string;

  @OneToMany(() => Exam, (exam) => exam.patient)
  exams: Exam[];
}
