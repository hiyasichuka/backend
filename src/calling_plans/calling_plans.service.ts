import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { CallingPlansRepository } from './calling_plans.repository';
import { CreateCallingPlanDto } from './dto/create-calling_plan.dto';
import { UpdateCallingPlanDto } from './dto/update-calling_plan.dto';

@Injectable()
export class CallingPlansService {
  constructor(
    @InjectRepository(CallingPlansRepository)
    private callingPlansRepository: CallingPlansRepository
  ) {}
  create(createCallingPlanDto: CreateCallingPlanDto) {
    return this.callingPlansRepository.create(createCallingPlanDto);
  }

  findAll() {
    return this.callingPlansRepository.find();
  }

  findOne(id: number) {
    return `This action returns a #${id} callingPlan`;
  }

  update(id: number, updateCallingPlanDto: UpdateCallingPlanDto) {
    return `This action updates a #${id} callingPlan`;
  }

  remove(id: number) {
    return `This action removes a #${id} callingPlan`;
  }
}
