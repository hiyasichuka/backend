import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { CreateInjectionDto } from './dto/create-injection.dto';
import { UpdateInjectionDto } from './dto/update-injection.dto';
import { InjectionsRepository } from './injection.repository';

@Injectable()
export class InjectionsService {
  constructor(
    @InjectRepository(InjectionsRepository)
    private injectionsRepository: InjectionsRepository
  ) {}

  create(createInjectionDto: CreateInjectionDto) {
    return this.create(createInjectionDto);
  }

  findAll() {
    return this.injectionsRepository.find();
  }

  findOne(id: number) {
    return this.injectionsRepository.findOne(id);
  }

  update(id: number, updateInjectionDto: UpdateInjectionDto) {
    return this.injectionsRepository.update(id, updateInjectionDto);
  }

  remove(id: number) {
    return `This action removes a #${id} injection`;
  }
}
