import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { FeaturesModule } from './features/features.module';
import { CoreModule } from './core/core.module';

@Module({
  imports: [CoreModule, FeaturesModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
