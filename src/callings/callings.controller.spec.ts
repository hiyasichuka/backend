import { Test, TestingModule } from '@nestjs/testing';
import { CallingsController } from './callings.controller';
import { CallingsService } from './callings.service';

describe('CallingsController', () => {
  let controller: CallingsController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [CallingsController],
      providers: [CallingsService],
    }).compile();

    controller = module.get<CallingsController>(CallingsController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
