import { InjectRepository } from '@nestjs/typeorm';
import { In, Repository } from 'typeorm';

import { TypePlagueEntity } from '../../domain/entities/type-plague-entity';
import { ITypePlagueRepository } from '../../domain/service/type-plague-entity';
import { TypePlague } from '../models/type-plague.entity';

export class TypePlagueRepository implements ITypePlagueRepository {
  constructor(
    @InjectRepository(TypePlague)
    private typePlagueRepository: Repository<TypePlague>,
  ) {}

  async findManyById(ids: string[]): Promise<TypePlagueEntity[]> {
    const items = await this.typePlagueRepository.findBy({
      id: In(ids),
    });
    return items.map((i) => new TypePlagueEntity({ ...i }));
  }

  async findOne(values: Partial<any>): Promise<TypePlagueEntity> {
    try {
      const data = await this.typePlagueRepository.findOneOrFail({
        where: { ...values },
      });

      return new TypePlagueEntity(data);
    } catch {
      return null;
    }
  }

  async find(values: Partial<any>): Promise<[] | TypePlagueEntity[]> {
    const TypePlagues = await this.typePlagueRepository.find({
      where: { ...values },
    });

    return TypePlagues.map((i) => new TypePlagueEntity(i));
  }

  async getAll(): Promise<TypePlagueEntity[]> {
    const TypePlagues = await this.typePlagueRepository.find();
    return TypePlagues.map((i) => new TypePlagueEntity(i));
  }

  async save(value: TypePlagueEntity): Promise<TypePlagueEntity> {
    const TypePlague = await this.typePlagueRepository.save(value);
    return new TypePlagueEntity(TypePlague);
  }

  async deleteOne(id: string): Promise<void> {
    await this.typePlagueRepository.delete(id);
  }
}
