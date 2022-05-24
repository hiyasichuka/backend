import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { CallingsRepository } from './callings.repository';
import { CreateCallingDto } from './dto/create-calling.dto';
import { UpdateCallingDto } from './dto/update-calling.dto';

@Injectable()
export class CallingsService {
  constructor(
    @InjectRepository(CallingsRepository)
    private callingsRepository: CallingsRepository
  ) {}

  create(createCallingDto: CreateCallingDto) {
    return this.callingsRepository.create(createCallingDto);
  }

  findAll() {
    return this.callingsRepository.find();
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
