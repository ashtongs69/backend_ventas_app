import { InjectRepository } from '@nestjs/typeorm';
import { In, Repository } from 'typeorm';

import { FrecuencyEntity } from '../../domain/entities/frecuency-entity';
import { IFrecuencyRepository } from '../../domain/service/frecuency-entity';
import { Frecuency } from '../models/frecuency.entity';

export class FrecuencyRepository implements IFrecuencyRepository {
  constructor(
    @InjectRepository(Frecuency)
    private frecuencyRepository: Repository<Frecuency>,
  ) {}

  async findManyById(ids: string[]): Promise<FrecuencyEntity[]> {
    const items = await this.frecuencyRepository.findBy({
      id: In(ids),
    });
    return items.map((i) => new FrecuencyEntity({ ...i }));
  }

  async findOne(values: Partial<any>): Promise<FrecuencyEntity> {
    try {
      const data = await this.frecuencyRepository.findOneOrFail({
        where: { ...values },
      });

      return new FrecuencyEntity(data);
    } catch {
      return null;
    }
  }
  async find(values: Partial<any>): Promise<[] | FrecuencyEntity[]> {
    const Frecuencys = await this.frecuencyRepository.find({
      where: { ...values },
    });

    return Frecuencys.map((i) => new FrecuencyEntity(i));
  }
  async findById(id: string): Promise<FrecuencyEntity> {
    try {
      const item = await this.frecuencyRepository.findOneByOrFail({ id });
      return new FrecuencyEntity(item);
    } catch {
      return null;
    }
  }

  async getAll(): Promise<FrecuencyEntity[]> {
    const Frecuencys = await this.frecuencyRepository.find();
    return Frecuencys.map((i) => new FrecuencyEntity(i));
  }

  async save(value: FrecuencyEntity): Promise<FrecuencyEntity> {
    const Frecuency = await this.frecuencyRepository.save(value);
    return new FrecuencyEntity(Frecuency);
  }

  async deleteOne(id: string): Promise<void> {
    await this.frecuencyRepository.delete(id);
  }
}
