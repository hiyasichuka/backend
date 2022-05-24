import { Test, TestingModule } from '@nestjs/testing';
import { CallingPlansController } from './calling_plans.controller';
import { CallingPlansService } from './calling_plans.service';

describe('CallingPlansController', () => {
  let controller: CallingPlansController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [CallingPlansController],
      providers: [CallingPlansService],
    }).compile();

    controller = module.get<CallingPlansController>(CallingPlansController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
