import { ApiProperty } from '@nestjs/swagger';
import { IsDate, IsNotEmpty, IsNumber } from 'class-validator';
import { Entity } from 'typeorm';

@Entity()
export class CreateCallingPlanDto {
  @ApiProperty()
  @IsNotEmpty()
  @IsDate()
  calling_date: Date;

  @ApiProperty()
  @IsNotEmpty()
  @IsNumber()
  recall_num: number;
}
