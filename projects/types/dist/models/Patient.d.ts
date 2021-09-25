import { User } from '.';
import { Exam } from './Exam';
export interface Patient extends User {
    exams: Exam[];
}
