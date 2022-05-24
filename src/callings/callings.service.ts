import { Injectable } from '@nestjs/common';
import { CreateCallingDto } from './dto/create-calling.dto';
import { UpdateCallingDto } from './dto/update-calling.dto';

@Injectable()
export class CallingsService {
  create(createCallingDto: CreateCallingDto) {
    return 'This action adds a new calling';
  }

  findAll() {
    return `This action returns all callings`;
  }

  findOne(id: number) {
    return `This action returns a #${id} calling`;
  }

  update(id: number, updateCallingDto: UpdateCallingDto) {
    return `This action updates a #${id} calling`;
  }

  remove(id: number) {
    return `This action removes a #${id} calling`;
  }
}
