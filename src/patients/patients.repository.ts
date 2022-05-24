import { EntityRepository, Repository } from 'typeorm';
import { CreatePatientDto } from './dto/create-patient.dto';
import { Patient } from './entities/patient.entity';

@EntityRepository(Patient)
export class PatientsRepository extends Repository<Patient> {
  async getPatients(): Promise<Patient[]> {
    return this.find();
  }

  async createPatient(createPatientDto: CreatePatientDto): Promise<Patient> {
    const { first_name, last_name, birth_date, phone, email } =
      createPatientDto;

    const patient = this.create({
      first_name: first_name,
      last_name: last_name,
      birth_date: birth_date,
      phone: phone,
      email: email,
    });

    return await this.save(patient);
  }
}
