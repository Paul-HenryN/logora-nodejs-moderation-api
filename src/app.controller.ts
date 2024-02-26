import { Body, Controller, Post } from '@nestjs/common';
import { ModerationService } from './moderation/moderation.service';

@Controller('api/moderation')
export class AppController {
  constructor(private readonly moderationService: ModerationService) {}

  @Post('predict')
  async predictModeration(@Body() body: { text: string; language?: string }) {
    try {
      const { text, language } = body;
      const prediction = await this.moderationService.getPrediction(
        text,
        language,
      );
      return { prediction };
    } catch (error) {
      console.log(error);
      throw error;
    }
  }

  @Post('score')
  async calculateScore(@Body() body: { text: string; language?: string }) {
    try {
      const { text, language } = body;
      const score = await this.moderationService.getScore(text, language);
      return { score };
    } catch (error) {
      throw error;
    }
  }
}
