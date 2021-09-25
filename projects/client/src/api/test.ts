import { BaseRepositoryRest } from '../common/baseRepositoryRest';
import { API_ROUTES } from '@nla-tech/motion-report.config';

export interface Test {
  message: string;
}

export class TestRepositoryRest extends BaseRepositoryRest<Test> {
  constructor() {
    super(API_ROUTES.TEST);
  }
}
