import { Injectable } from '@nestjs/common';

import { IUseCase } from 'src/global';

import { ContactCustomerEntity } from '../../domain/entities/ContactCustomerEntity';
import { ContactCustomerRepository } from '../../infrastructure/repository/ContactCustomer.repository';

@Injectable()
export class ContactCustomerGetAllUseCase
  implements IUseCase<never, ContactCustomerEntity[]>
{
  constructor(private contactCustomerRepository: ContactCustomerRepository) {}
  async execute(): Promise<ContactCustomerEntity[]> {
    return this.contactCustomerRepository.find({});
  }
}
