import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';

import { PhoneModelEntity } from '../../domain/entities/PhoneModelEntity';
import { IPhoneModelRepository } from '../../domain/repositories/PhoneModelRepository';
import { PhoneModel } from '../entities/PhoneModel.entity';

@Injectable()
export class PhoneModelRepository implements IPhoneModelRepository {
  constructor(
    @InjectRepository(PhoneModel)
    private phoneModelRepository: Repository<PhoneModel>,
  ) {}
  async findById(id: string): Promise<PhoneModelEntity> {
    try {
      const item = await this.phoneModelRepository.findOneByOrFail({ id });
      return new PhoneModelEntity(item);
    } catch {
      return null;
    }
  }

  async getAll(): Promise<PhoneModelEntity[]> {
    const colors = await this.phoneModelRepository.find();
    return colors.map((i) => new PhoneModelEntity(i));
  }

  async save(value: PhoneModelEntity): Promise<PhoneModelEntity> {
    const PhoneModel = await this.phoneModelRepository.save(value);
    return new PhoneModelEntity(PhoneModel);
  }
  async updateOne(
    id: string,
    value: Partial<Omit<PhoneModelEntity, 'id'>>,
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
