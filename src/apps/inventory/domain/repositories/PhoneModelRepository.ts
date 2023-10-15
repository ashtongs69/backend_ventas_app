import { IWriteRepository } from 'src/shared/base/crud.repository';

import { PhoneModelEntity } from '../entities/PhoneModelEntity';

// eslint-disable-next-line @typescript-eslint/naming-convention
export interface IPhoneModelRepository
  extends IWriteRepository<PhoneModelEntity> {
  getAll(): Promise<PhoneModelEntity[]>;
  findById(id: string): Promise<PhoneModelEntity | null>;
}
