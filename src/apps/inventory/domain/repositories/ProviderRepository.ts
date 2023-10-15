import { IWriteRepository } from 'src/shared/base/crud.repository';

import { ProviderEntity } from '../entities/ProviderEntity';

// eslint-disable-next-line @typescript-eslint/naming-convention
export interface IProviderRepository extends IWriteRepository<ProviderEntity> {
  getAll(): Promise<ProviderEntity[]>;
  findById(id: string): Promise<ProviderEntity | null>;
}
