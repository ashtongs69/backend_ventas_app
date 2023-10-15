import { IWriteRepository } from 'src/shared/base/crud.repository';

import { StoreEntity } from '../entities/StoreEntity';

export interface IStoreRepository extends IWriteRepository<StoreEntity> {
  getAll(): Promise<StoreEntity[]>;
  findById(id: string): Promise<StoreEntity | null>;
}
