import { IsDate, IsNotEmpty, IsNumber } from 'class-validator';
import { Entity } from 'typeorm';

@Entity()
export class CreateCallingPlanDto {
  @IsNotEmpty()
  @IsDate()
  calling_date: Date;

  @IsNotEmpty()
  @IsNumber()
  recalling_num: number;
}
