import { Module } from '@nestjs/common';
import { CallingPlansService } from './calling_plans.service';
import { CallingPlansController } from './calling_plans.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { CallingPlansRepository } from './calling_plans.repository';

@Module({
  imports: [TypeOrmModule.forFeature([CallingPlansRepository])],
  controllers: [CallingPlansController],
  providers: [CallingPlansService],
})
export class CallingPlansModule {}
