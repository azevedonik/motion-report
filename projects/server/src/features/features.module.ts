import { Module } from '@nestjs/common';
import { PatientModule } from './patient/patient.module';
import { ExamModule } from './exam/exam.module';

@Module({
  imports: [PatientModule, ExamModule],
})
export class FeaturesModule {}
