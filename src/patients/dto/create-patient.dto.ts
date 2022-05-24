import { ApiProperty } from '@nestjs/swagger';
import { IsNotEmpty } from 'class-validator';

export class CreatePatientDto {
  @ApiProperty()
  first_name: string;

  @ApiProperty()
  last_name: string;

  @ApiProperty()
  birth_date: Date;

  @ApiProperty()
  @IsNotEmpty()
  phone: number;

  @ApiProperty()
  email: string;
}
