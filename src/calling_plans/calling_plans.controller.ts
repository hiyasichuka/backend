import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
} from '@nestjs/common';
import { CallingPlansService } from './calling_plans.service';
import { CreateCallingPlanDto } from './dto/create-calling_plan.dto';
import { UpdateCallingPlanDto } from './dto/update-calling_plan.dto';

@Controller('calling-plans')
export class CallingPlansController {
  constructor(private readonly callingPlansService: CallingPlansService) {}

  @Post()
  create(@Body() createCallingPlanDto: CreateCallingPlanDto) {
    return this.callingPlansService.create(createCallingPlanDto);
  }

  @Get()
  findAll() {
    return this.callingPlansService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.callingPlansService.findOne(+id);
  }

  @Patch(':id')
  update(
    @Param('id') id: string,
    @Body() updateCallingPlanDto: UpdateCallingPlanDto
  ) {
    return this.callingPlansService.update(+id, updateCallingPlanDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.callingPlansService.remove(+id);
  }
}
