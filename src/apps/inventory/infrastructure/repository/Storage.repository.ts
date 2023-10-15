import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';

import { StorageEntity } from '../../domain/entities/StorageEntity';
import { IStorageRepository } from '../../domain/repositories/StorageRepository';
import { Storage } from '../entities/Storage.entity';

@Injectable()
export class StorageRepository implements IStorageRepository {
  constructor(
    @InjectRepository(Storage)
    private storageRepository: Repository<Storage>,
  ) {}
  async findById(id: string): Promise<StorageEntity> {
    try {
      const item = await this.storageRepository.findOneByOrFail({ id });
      return new StorageEntity(item);
    } catch {
      return null;
    }
  }

  async getAll(): Promise<StorageEntity[]> {
    const colors = await this.storageRepository.find();
    return colors.map((i) => new StorageEntity(i));
  }

  async save(value: StorageEntity): Promise<StorageEntity> {
    const Storage = await this.storageRepository.save(value);
    return new StorageEntity(Storage);
  }
  async updateOne(
    id: string,
    value: Partial<Omit<StorageEntity, 'id'>>,
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
