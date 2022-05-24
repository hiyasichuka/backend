import { IsNotEmpty } from 'class-validator';

export class CreatePatientDto {
  first_name: string;

  last_name: string;

  birth_date: Date;

  @IsNotEmpty()
  phone: number;
  
  email: string;
}
