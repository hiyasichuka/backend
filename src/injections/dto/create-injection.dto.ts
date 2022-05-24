import { ApiProperty } from '@nestjs/swagger';
import { Patient } from 'src/patients/entities/patient.entity';

export class CreateInjectionDto {
  @ApiProperty()
  patient: Patient;

  @ApiProperty()
  injection_datetime: Date;

  @ApiProperty()
  injectioned: boolean;
}
