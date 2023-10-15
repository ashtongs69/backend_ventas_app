import { Injectable } from '@nestjs/common';

import { IUseCase } from 'src/global';
import { generateUUID } from 'src/shared/utils/generateUUID';

import { ContactCustomerEntity } from '../../domain/entities/ContactCustomerEntity';
import { CreateCustomerDTO } from '../../infrastructure/dto/customer';
import { ContactCustomerRepository } from '../../infrastructure/repository/ContactCustomer.repository';

@Injectable()
export class ContactCustomerCreatorUseCase
  implements IUseCase<CreateCustomerDTO, ContactCustomerEntity>
{
  constructor(private contactCustomerRepository: ContactCustomerRepository) {}

  async execute(data: CreateCustomerDTO): Promise<ContactCustomerEntity> {
    const entity = new ContactCustomerEntity({ id: generateUUID(), ...data });
    return await this.contactCustomerRepository.save(entity);
  }
}
