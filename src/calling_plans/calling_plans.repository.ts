import { EntityRepository, Repository } from 'typeorm';
import { CreateCallingPlanDto } from './dto/create-calling_plan.dto';
import { CallingPlan } from './entities/calling_plan.entity';

@EntityRepository(CallingPlan)
export class CallingPlansRepository extends Repository<CallingPlan> {
  async getCallingPlans(): Promise<CallingPlan[]> {
    return this.find();
  }

  async createCallingPlan(
    createCallingPlanDto: CreateCallingPlanDto
  ): Promise<CallingPlan> {
    const { calling_date, recall_num } = createCallingPlanDto;

    const calling_plan = this.create({
      calling_date,
      recall_num,
    });

    return await this.save(calling_plan);
  }
}
