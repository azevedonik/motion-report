import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { GLOBAL_CONFIG } from '@nla-tech/motion-report.config';

const DB_CONFIG = GLOBAL_CONFIG.POSTGRES;

@Module({
  imports: [
    TypeOrmModule.forRoot({
      type: 'postgres',
      host: DB_CONFIG.HOST,
      port: DB_CONFIG.PORT,
      username: DB_CONFIG.USERNAME,
      password: DB_CONFIG.PASSWORD,
      database: DB_CONFIG.DATABASE,
      autoLoadEntities: true,
      synchronize: true,
    }),
  ],
})
export class DatabaseModule {}
