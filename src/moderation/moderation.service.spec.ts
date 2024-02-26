import { Test, TestingModule } from '@nestjs/testing';
import { ModerationService } from './moderation.service';
import { axios } from '../lib/axios';
import * as dotenv from 'dotenv';

dotenv.config({ path: '.env' });

jest.mock('../lib/axios');

describe('ModerationService', () => {
  let service: ModerationService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [ModerationService],
    }).compile();

    service = module.get<ModerationService>(ModerationService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });

  it('should get prediction', async () => {
    const text = 'Some text';
    const language = 'en';
    const prediction = 0.8;

    (axios.get as jest.Mock).mockResolvedValueOnce({ data: { prediction } });

    const result = await service.getPrediction(text, language);

    expect(result).toBe(prediction);
    expect(axios.get).toHaveBeenCalledWith('/predict', {
      params: { text, language },
    });
  });

  it('should get score', async () => {
    const text = 'Some text';
    const language = 'en';
    const score = 0.9;

    (axios.get as jest.Mock).mockResolvedValueOnce({ data: { score } });

    const result = await service.getScore(text, language);

    expect(result).toBe(score);
    expect(axios.get).toHaveBeenCalledWith('/score', {
      params: { text, language },
    });
  });
});
