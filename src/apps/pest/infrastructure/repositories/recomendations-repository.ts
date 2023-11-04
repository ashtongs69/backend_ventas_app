import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { In, Repository } from 'typeorm';

import { RecomendationsEntity } from '../../domain/entities/recomendations-entity';
import { IRecomendationsRepository } from '../../domain/service/recomendations-entity';
import { Recomendations } from '../models/recomendations.entity';

@Injectable()
export class RecomendationsRepository implements IRecomendationsRepository {
  constructor(
    @InjectRepository(Recomendations)
    private recomendationsRepository: Repository<Recomendations>,
  ) {}

  async findManyById(ids: string[]): Promise<RecomendationsEntity[]> {
    const items = await this.recomendationsRepository.findBy({
      id: In(ids),
    });
    return items.map((i) => new RecomendationsEntity({ ...i }));
  }

  async findOne(values: Partial<any>): Promise<RecomendationsEntity> {
    try {
      const data = await this.recomendationsRepository.findOneOrFail({
        where: { ...values },
      });

      return new RecomendationsEntity(data);
    } catch {
      return null;
    }
  }

  async find(values: Partial<any>): Promise<[] | RecomendationsEntity[]> {
    const Recomendationss = await this.recomendationsRepository.find({
      where: { ...values },
    });

    return Recomendationss.map((i) => new RecomendationsEntity(i));
  }

  async findById(id: string): Promise<RecomendationsEntity> {
    try {
      const item = await this.recomendationsRepository.findOneByOrFail({ id });
      return new RecomendationsEntity(item);
    } catch {
      return null;
    }
  }

  async getAll(): Promise<RecomendationsEntity[]> {
    const Recomendationss = await this.recomendationsRepository.find();
    return Recomendationss.map((i) => new RecomendationsEntity(i));
  }

  async save(value: RecomendationsEntity): Promise<RecomendationsEntity> {
    const Recomendations = await this.recomendationsRepository.save(value);
    return new RecomendationsEntity(Recomendations);
  }

  async deleteOne(id: string): Promise<void> {
    await this.recomendationsRepository.delete(id);
  }
}
