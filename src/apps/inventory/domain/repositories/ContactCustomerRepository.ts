import { IReadRepository } from 'src/shared/base/crud.repository';

import {
  ContactCustomerEntity,
  ContactCustomerQuery,
} from '../entities/ContactCustomerEntity';

export interface IContactCustomerRepository
  extends IReadRepository<ContactCustomerQuery, ContactCustomerEntity> {
  save(data: ContactCustomerEntity): Promise<ContactCustomerEntity | null>;
}
