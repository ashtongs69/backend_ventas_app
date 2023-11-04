import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { In, Repository } from 'typeorm';

import { TypeServiceEntity } from '../../domain/entities/type-service-entity';
import { ITypeServiceRepository } from '../../domain/service/type-service-entity';
import { TypeService } from '../models/type-service.entity';

@Injectable()
export class TypeServiceRepository implements ITypeServiceRepository {
  constructor(
    @InjectRepository(TypeService)
    private typeServiceRepository: Repository<TypeService>,
  ) {}

  async findManyById(ids: string[]): Promise<TypeServiceEntity[]> {
    const items = await this.typeServiceRepository.findBy({
      id: In(ids),
    });
    return items.map((i) => new TypeServiceEntity({ ...i }));
  }

  async findOne(values: Partial<any>): Promise<TypeServiceEntity> {
    try {
      const data = await this.typeServiceRepository.findOneOrFail({
        where: { ...values },
      });

      return new TypeServiceEntity(data);
    } catch {
      return null;
    }
  }

  async find(values: Partial<any>): Promise<[] | TypeServiceEntity[]> {
    const TypeServices = await this.typeServiceRepository.find({
      where: { ...values },
    });

    return TypeServices.map((i) => new TypeServiceEntity(i));
  }

  async getAll(): Promise<TypeServiceEntity[]> {
    const TypeServices = await this.typeServiceRepository.find();
    return TypeServices.map((i) => new TypeServiceEntity(i));
  }

  async save(value: TypeServiceEntity): Promise<TypeServiceEntity> {
    const TypeService = await this.typeServiceRepository.save(value);
    return new TypeServiceEntity(TypeService);
  }

  async deleteOne(id: string): Promise<void> {
    await this.typeServiceRepository.delete(id);
  }
}
