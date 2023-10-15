import {
  IReadRepository,
  IWriteRepository,
} from 'src/shared/base/crud.repository';

import { FrecuencyEntity } from '../entities/frecuency-entity';

export interface IFrecuencyRepository
  extends IWriteRepository<FrecuencyEntity>,
    IReadRepository<any, FrecuencyEntity> {
  getAll(): Promise<FrecuencyEntity[]>;
  findManyById(ids: string[]): Promise<FrecuencyEntity[]>;
}
