import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';

import {
  PhoneChangeEntity,
  PhoneChangeQuery,
} from '../../domain/entities/PhoneChangeEntity';
import { IPhoneChangeRepository } from '../../domain/repositories/PhoneChangeRepository';
import { PhoneChange } from '../entities/PhoneChange.entity';

@Injectable()
export class PhoneChangeRepository implements IPhoneChangeRepository {
  constructor(
    @InjectRepository(PhoneChange)
    private phoneChangeRepository: Repository<PhoneChange>,
  ) {}

  async save(data: PhoneChangeEntity): Promise<PhoneChangeEntity | null> {
    try {
      const item = await this.phoneChangeRepository.save(data);
      return new PhoneChangeEntity(item);
    } catch (error) {
      return null;
    }
  }

  async findOne(
    values: Partial<PhoneChangeQuery>,
  ): Promise<PhoneChangeEntity | null> {
    try {
      const item = await this.phoneChangeRepository.findOneOrFail({
        where: values,
        relations: {
          customer: true,
          productGived: true,
          productReceived: true,
        },
      });
      return new PhoneChangeEntity(item);
    } catch (error) {
      return null;
    }
  }

  async find(
    values: Partial<PhoneChangeQuery>,
  ): Promise<[] | PhoneChangeEntity[]> {
    const items = await this.phoneChangeRepository.find({
      where: values,
      relations: {
        customer: true,
        productGived: true,
        productReceived: true,
      },
    });
    return items.map((item) => new PhoneChangeEntity(item));
  }
}
