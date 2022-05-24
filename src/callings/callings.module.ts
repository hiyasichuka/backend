import { Module } from '@nestjs/common';
import { CallingsService } from './callings.service';
import { CallingsController } from './callings.controller';

@Module({
  controllers: [CallingsController],
  providers: [CallingsService]
})
export class CallingsModule {}
