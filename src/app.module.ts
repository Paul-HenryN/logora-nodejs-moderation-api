import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { ModerationModule } from './moderation/moderation.module';
import { ConfigModule } from '@nestjs/config';

@Module({
  imports: [ModerationModule, ConfigModule.forRoot()],
  controllers: [AppController],
})
export class AppModule {}
