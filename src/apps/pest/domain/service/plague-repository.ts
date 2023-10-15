import {
  IReadRepository,
  IWriteRepository,
} from 'src/shared/base/crud.repository';

import { PlagueEntity } from '../entities/plague-entity';

export interface IPlagueRepository
  extends IWriteRepository<PlagueEntity>,
    IReadRepository<any, PlagueEntity> {
  getAll(): Promise<PlagueEntity[]>;
}
