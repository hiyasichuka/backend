import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { CreatePatientDto } from './dto/create-patient.dto';
import { UpdatePatientDto } from './dto/update-patient.dto';
import { PatientsRepository } from './patients.repository';

@Injectable()
export class PatientsService {
  constructor(
    @InjectRepository(PatientsRepository)
    private patientsRepository: PatientsRepository
  ) {}

  create(createPatientDto: CreatePatientDto) {
    return this.patientsRepository.createPatient(createPatientDto);
  }

  findAll() {
    return this.patientsRepository.find();
  }

  findOne(id: number) {
    return this.patientsRepository.findOne(id);
  }

  update(id: number, updatePatientDto: UpdatePatientDto) {
    return this.patientsRepository.update(id, updatePatientDto);
  }

  remove(id: number) {
    return `This action removes a #${id} patient`;
  }
}
