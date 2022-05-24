import { EntityRepository, Repository } from 'typeorm';
import { CreateInjectionDto } from './dto/create-injection.dto';
import { Injection } from './entities/injection.entity';

@EntityRepository(Injection)
export class InjectionsRepository extends Repository<Injection> {
  async getPatients(): Promise<Injection[]> {
    return this.find();
  }

  async createInjection(
    createInjectionDto: CreateInjectionDto
  ): Promise<Injection> {
    const { injectioned, injection_datetime, patient } = createInjectionDto;

    const injection = this.create({
      patient: patient,
      injection_datetime: injection_datetime,
      injected: injectioned,
    });

    return await this.save(injection);
  }
}
