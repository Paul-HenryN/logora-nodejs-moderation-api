import { Injectable, NotImplementedException } from '@nestjs/common';

@Injectable()
export class ModerationService {
  async getPrediction(text: string, language: string) {
    throw new NotImplementedException();
  }
  async getScore(text: string, language: string) {
    throw new NotImplementedException();
  }
}
