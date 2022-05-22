import { ApiProperty } from '@nestjs/swagger';
import { IsEnum } from 'class-validator';
import { TaskStatus } from '../task-status.enum';

export class UpdateTaskStatusDto {
  @ApiProperty({
    description: 'Task status',
    enum: ['OPEN', 'IN IN_PROGRESS', 'DONE'],
    default: 'OPEN',
  })
  @IsEnum(TaskStatus)
  status: TaskStatus;
}
