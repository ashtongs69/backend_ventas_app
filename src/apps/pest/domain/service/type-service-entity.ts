import {
  IReadRepository,
  IWriteRepository,
} from 'src/shared/base/crud.repository';

import { TypeServiceEntity } from '../entities/type-service-entity';

export interface ITypeServiceRepository
  extends IWriteRepository<TypeServiceEntity>,
    IReadRepository<any, TypeServiceEntity> {
  getAll(): Promise<TypeServiceEntity[]>;
  findManyById(ids: string[]): Promise<TypeServiceEntity[]>;
}
