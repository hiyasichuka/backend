import { Module } from '@nestjs/common';
import { CallingPlansService } from './calling_plans.service';
import { CallingPlansController } from './calling_plans.controller';

@Module({
  controllers: [CallingPlansController],
  providers: [CallingPlansService]
})
export class CallingPlansModule {}
