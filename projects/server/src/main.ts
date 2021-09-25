import { Logger } from '@nestjs/common';
import { NestFactory } from '@nestjs/core';
import { GLOBAL_CONFIG } from '@nla-tech/motion-report.config';
import { AppModule } from './app.module';

async function bootstrap() {
  const port = GLOBAL_CONFIG.API.SERVER_PORT;
  const logger = new Logger('Main');
  const app = await NestFactory.create(AppModule);
  await app.listen(port);
  logger.log(`Running on port: ${port}`);
}
bootstrap();
