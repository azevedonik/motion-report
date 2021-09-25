import { Patient } from '@nla-tech/motion-report.types';

export class CreatePatientDto implements Omit<Patient, 'exams'> {
  birthdate: Date;
  name: string;
  email: string;
}
