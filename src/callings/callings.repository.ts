import { EntityRepository, Repository } from 'typeorm';
import { CreateCallingDto } from './dto/create-calling.dto';
import { Calling } from './entities/calling.entity';

@EntityRepository(Calling)
export class CallingsRepository extends Repository<Calling> {
  async getCallings(): Promise<Calling[]> {
    return await this.find();
  }

  async createCalling(createCllingDto: CreateCallingDto): Promise<Calling> {
    const { called_at } = createCllingDto;
    const calling = this.create({
      called_at,
    });
    return await this.save(calling);
  }
}
