import { Injectable } from '@nestjs/common';
import { axios } from '../lib/axios';

@Injectable()
export class ModerationService {
  async getPrediction(text: string, language?: string) {
    const response = await axios.get('/predict', {
      params: { text, language },
    });
    return response.data.prediction;
  }
  async getScore(text: string, language?: string) {
    const response = await axios.get('/score', {
      params: { text, language },
    });
    return response.data.score;
  }
}
