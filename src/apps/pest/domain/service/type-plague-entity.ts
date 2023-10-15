import {
  IReadRepository,
  IWriteRepository,
} from 'src/shared/base/crud.repository';

import { TypePlagueEntity } from '../entities/type-plague-entity';

export interface ITypePlagueRepository
  extends IWriteRepository<TypePlagueEntity>,
    IReadRepository<any, TypePlagueEntity> {
  getAll(): Promise<TypePlagueEntity[]>;
  findManyById(ids: string[]): Promise<TypePlagueEntity[]>;
}
