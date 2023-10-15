import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { In, Repository } from 'typeorm';

import { SalesEntity } from '../../domain/entities/SalesEntity';
import { ISalesRepository } from '../../domain/repositories/SalesRepository';
import { Sales } from '../entities/Sales.entity';

@Injectable()
export class SalesRepository implements ISalesRepository {
  constructor(
    @InjectRepository(Sales)
    private salesRepository: Repository<Sales>,
  ) {}
  async findManyById(ids: string[]): Promise<SalesEntity[]> {
    const items = await this.salesRepository.findBy({
      id: In(ids),
    });
    return items.map((i) => new SalesEntity({ ...i }));
  }

  async findById(id: string): Promise<SalesEntity> {
    try {
      const item = await this.salesRepository.findOneByOrFail({ id });
      return new SalesEntity(item);
    } catch {
      return null;
    }
  }

  async getAll(): Promise<SalesEntity[]> {
    const Saless = await this.salesRepository.find();
    return Saless.map((i) => new SalesEntity(i));
  }
  async save(value: SalesEntity): Promise<SalesEntity> {
    const Sales = await this.salesRepository.save(value);
    return new SalesEntity(Sales);
  }

  async updateOne(
    id: string,
    value: Partial<Omit<SalesEntity, 'id'>>,
  ): Promise<void> {
    console.log(id);
    console.log(value);

    throw new Error('Method not implemented.');
  }
  async deleteOne(id: string): Promise<void> {
    console.log(id);

    throw new Error('Method not implemented.');
  }
}
