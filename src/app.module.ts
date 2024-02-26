import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { ModerationModule } from './moderation/moderation.module';

@Module({
  imports: [ModerationModule],
  controllers: [AppController],
})
export class AppModule {}
