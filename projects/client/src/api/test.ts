import { BaseRepositoryRest } from '../common/baseRepositoryRest';
import { GLOBAL_CONFIG } from '@nla-tech/main.config';

export interface Test {
  message: string;
}

export class TestRepositoryRest extends BaseRepositoryRest<Test> {
  constructor() {
    super(GLOBAL_CONFIG.API.API_ROUTES.AUTH);
  }
}
