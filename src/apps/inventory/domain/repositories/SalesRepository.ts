import { IWriteRepository } from 'src/shared/base/crud.repository';

import { SalesEntity } from '../entities/SalesEntity';

export interface ISalesRepository extends IWriteRepository<SalesEntity> {
  getAll(): Promise<SalesEntity[]>;
  findById(id: string): Promise<SalesEntity | null>;
  findManyById(ids: string[]): Promise<SalesEntity[]>;
}
