import { Injectable } from '@nestjs/common';
import { CreateCallingPlanDto } from './dto/create-calling_plan.dto';
import { UpdateCallingPlanDto } from './dto/update-calling_plan.dto';

@Injectable()
export class CallingPlansService {
  create(createCallingPlanDto: CreateCallingPlanDto) {
    return 'This action adds a new callingPlan';
  }

  findAll() {
    return `This action returns all callingPlans`;
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
