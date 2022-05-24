import { PartialType } from '@nestjs/swagger';
import { CreateInjectionDto } from './create-injection.dto';

export class UpdateInjectionDto extends PartialType(CreateInjectionDto) {}
