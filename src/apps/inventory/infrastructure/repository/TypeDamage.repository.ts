import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { In, Repository } from 'typeorm';

import { TypeDamageEntity } from '../../domain/entities/TypeDamageEntity';
import { ITypeDamageRepository } from '../../domain/repositories/TypeDamageRepository';
import { TypeDamage } from '../entities/TypeDamage.entity';

@Injectable()
export class TypeDamageRepository implements ITypeDamageRepository {
  constructor(
    @InjectRepository(TypeDamage)
    private typeDamageRepository: Repository<TypeDamage>,
  ) {}
  async findManyById(ids: string[]): Promise<TypeDamageEntity[]> {
    const items = await this.typeDamageRepository.findBy({
      id: In(ids),
    });
    return items.map((i) => new TypeDamageEntity({ ...i }));
  }
  async findById(id: string): Promise<TypeDamageEntity> {
    try {
      const item = await this.typeDamageRepository.findOneBy({ id });
      return new TypeDamageEntity(item);
    } catch {
      return null;
    }
  }
  async save(data: TypeDamageEntity): Promise<TypeDamageEntity> {
    const item = await this.typeDamageRepository.save(data);
    return new TypeDamageEntity(item);
  }
  async getAll(): Promise<TypeDamageEntity[]> {
    const items = await this.typeDamageRepository.find();
    return items.map((i) => new TypeDamageEntity(i));
  }
}
