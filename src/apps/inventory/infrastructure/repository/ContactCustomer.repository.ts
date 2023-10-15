import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';

import {
  ContactCustomerEntity,
  ContactCustomerQuery,
} from '../../domain/entities/ContactCustomerEntity';
import { IContactCustomerRepository } from '../../domain/repositories/ContactCustomerRepository';
import { ContactCustomer } from '../entities/ContactCustomer.entity';

@Injectable()
export class ContactCustomerRepository implements IContactCustomerRepository {
  constructor(
    @InjectRepository(ContactCustomer)
    private contactCustomerRepository: Repository<ContactCustomer>,
  ) {}
  async save(data: ContactCustomerEntity): Promise<ContactCustomerEntity> {
    const item = await this.contactCustomerRepository.save(data);

    return new ContactCustomerEntity(item);
  }
  async findOne(
    values: Partial<ContactCustomerQuery>,
  ): Promise<ContactCustomerEntity | null> {
    try {
      const item = await this.contactCustomerRepository.findOneByOrFail(values);
      return new ContactCustomerEntity(item);
    } catch {
      return null;
    }
  }
  async find(
    values: Partial<ContactCustomerQuery>,
  ): Promise<ContactCustomerEntity[]> {
    const items = await this.contactCustomerRepository.findBy(values);
    return items.map((i) => new ContactCustomerEntity(i));
  }
}
