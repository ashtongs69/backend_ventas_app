import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';

import { StoreEntity } from '../../domain/entities/StoreEntity';
import { IStoreRepository } from '../../domain/repositories/StoreRepository';
import { Store } from '../entities/Store.entity';

@Injectable()
export class StoreRepository implements IStoreRepository {
  constructor(
    @InjectRepository(Store)
    private storeRepository: Repository<Store>,
  ) {}

  async findById(id: string): Promise<StoreEntity> {
    try {
      const item = await this.storeRepository.findOneByOrFail({ id });
      return new StoreEntity(item);
    } catch {
      return null;
    }
  }

  async getAll(): Promise<StoreEntity[]> {
    const colors = await this.storeRepository.find();
    return colors.map((i) => new StoreEntity(i));
  }
  async save(value: StoreEntity): Promise<StoreEntity> {
    const color = await this.storeRepository.save(value);
    return new StoreEntity(color);
  }

  async updateOne(
    id: string,
    value: Partial<Omit<StoreEntity, 'id'>>,
  ): Promise<void> {
    console.log({ id, value });

    throw new Error('Method not implemented.');
  }
  async deleteOne(id: string): Promise<void> {
    await this.storeRepository.delete({ id });
  }
}
