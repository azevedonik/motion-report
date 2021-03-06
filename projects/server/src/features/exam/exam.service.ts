import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { CommonEntity } from 'src/common/common-entity.entity';
import { Repository } from 'typeorm';
import { CreateExamDto } from './dto/create-exam.dto';
import { UpdateExamDto } from './dto/update-exam.dto';
import { Exam } from './entities/exam.entity';

@Injectable()
export class ExamService extends CommonEntity {
  constructor(
    @InjectRepository(Exam) private examRepository: Repository<Exam>,
  ) {
    super();
  }
  create(createExamDto: CreateExamDto) {
    const exam = this.examRepository.create(createExamDto);
    return this.examRepository.save(exam);
  }

  findAll() {
    return this.examRepository.findOne();
  }

  findOne(id: number) {
    return this.examRepository.findOne(id);
  }

  update(id: number, updateExamDto: UpdateExamDto) {
    return this.examRepository.update(id, updateExamDto);
  }

  remove(id: number) {
    return this.examRepository.delete(id);
  }
}
