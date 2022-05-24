import { PartialType } from '@nestjs/swagger';
import { CreateCallingDto } from './create-calling.dto';

export class UpdateCallingDto extends PartialType(CreateCallingDto) {}
