import { IWriteRepository } from 'src/shared/base/crud.repository';

import { StorageEntity } from '../entities/StorageEntity';

// eslint-disable-next-line @typescript-eslint/naming-convention
export interface IStorageRepository extends IWriteRepository<StorageEntity> {
  getAll(): Promise<StorageEntity[]>;
  findById(id: string): Promise<StorageEntity | null>;
}
