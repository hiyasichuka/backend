import { ApiProperty } from '@nestjs/swagger';
import { IsDate, IsNotEmpty } from 'class-validator';

export class CreateCallingDto {
  @ApiProperty()
  @IsNotEmpty()
  @IsDate()
  called_at: Date;
}
