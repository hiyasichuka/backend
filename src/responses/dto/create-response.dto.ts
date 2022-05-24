import { ApiProperty } from '@nestjs/swagger';
import { IsNotEmpty, IsNumber } from 'class-validator';

export class CreateResponseDto {
  @ApiProperty()
  @IsNotEmpty()
  @IsNumber()
  pushed_no: number;
}
