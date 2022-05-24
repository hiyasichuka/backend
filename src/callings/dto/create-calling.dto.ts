import { IsDate, IsNotEmpty } from 'class-validator';

export class CreateCallingDto {
  @IsNotEmpty()
  @IsDate()
  called_at: Date;
}
