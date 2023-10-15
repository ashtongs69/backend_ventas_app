import { IReadRepository } from 'src/shared/base/crud.repository';

import {
  PhoneChangeEntity,
  PhoneChangeQuery,
} from '../entities/PhoneChangeEntity';

export interface IPhoneChangeRepository
  extends IReadRepository<PhoneChangeQuery, PhoneChangeEntity> {
  save(data: PhoneChangeEntity): Promise<PhoneChangeEntity>;
}
