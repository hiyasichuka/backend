import { Test, TestingModule } from '@nestjs/testing';
import { CallingPlansService } from './calling_plans.service';

describe('CallingPlansService', () => {
  let service: CallingPlansService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [CallingPlansService],
    }).compile();

    service = module.get<CallingPlansService>(CallingPlansService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
