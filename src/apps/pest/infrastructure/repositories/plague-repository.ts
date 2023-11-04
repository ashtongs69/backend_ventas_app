import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';

import { PlagueEntity } from '../../domain/entities/plague-entity';
import { IPlagueRepository } from '../../domain/service/plague-repository';
import { Plague } from '../models/plague.entity';

@Injectable()
export class PlagueRepository implements IPlagueRepository {
  constructor(
    @InjectRepository(Plague)
    private plagueRepository: Repository<Plague>,
  ) {}

  async findOne(values: Partial<any>): Promise<PlagueEntity> {
    try {
      const data = await this.plagueRepository.findOneOrFail({
        where: { ...values },
      });

      return new PlagueEntity(data);
    } catch {
      return null;
    }
  }
  async find(values: Partial<any>): Promise<[] | PlagueEntity[]> {
    const Plagues = await this.plagueRepository.find({
      where: { ...values },
    });

    return Plagues.map((i) => new PlagueEntity(i));
  }
  async findById(id: string): Promise<PlagueEntity> {
    try {
      const item = await this.plagueRepository.findOneByOrFail({ id });
      return new PlagueEntity(item);
    } catch {
      return null;
    }
  }

  async getAll(): Promise<PlagueEntity[]> {
    const Plagues = await this.plagueRepository.find();
    return Plagues.map((i) => new PlagueEntity(i));
  }

  async save(value: PlagueEntity): Promise<PlagueEntity> {
    const Plague = await this.plagueRepository.save(value);
    return new PlagueEntity(Plague);
  }

  async deleteOne(id: string): Promise<void> {
    await this.plagueRepository.delete(id);
  }
}
