import { IsDate, IsNotEmpty, IsNumber } from 'class-validator';
import { Entity } from 'typeorm';

@Entity()
export class CreateCallingPlanDto {
  @IsNotEmpty()
  @IsDate()
  calling_date: Date;

  @IsNotEmpty()
  @IsNumber()
  recall_num: number;
}
