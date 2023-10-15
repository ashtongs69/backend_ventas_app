import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';

import { ProviderEntity } from '../../domain/entities/ProviderEntity';
import { IProviderRepository } from '../../domain/repositories/ProviderRepository';
import { Provider } from '../entities/Provider.entity';

@Injectable()
export class ProviderRepository implements IProviderRepository {
  constructor(
    @InjectRepository(Provider)
    private providerRepository: Repository<Provider>,
  ) {}

  async findById(id: string): Promise<ProviderEntity> {
    try {
      const item = await this.providerRepository.findOneByOrFail({ id });
      return new ProviderEntity(item);
    } catch {
      return null;
    }
  }

  async getAll(): Promise<ProviderEntity[]> {
    const colors = await this.providerRepository.find();
    return colors.map((i) => new ProviderEntity(i));
  }

  async save(value: ProviderEntity): Promise<ProviderEntity> {
    const provider = await this.providerRepository.save(value);
    return new ProviderEntity(provider);
  }
  async updateOne(
    id: string,
    value: Partial<Omit<ProviderEntity, 'id'>>,
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
