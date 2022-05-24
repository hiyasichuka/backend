import { IsNotEmpty, IsNumber } from 'class-validator';

export class CreateResponseDto {
  @IsNotEmpty()
  @IsNumber()
  pushed_no: number;
}
