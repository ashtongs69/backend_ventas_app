import {
  IReadRepository,
  IWriteRepository,
} from 'src/shared/base/crud.repository';

import { RecomendationsEntity } from '../entities/recomendations-entity';

export interface IRecomendationsRepository
  extends IWriteRepository<RecomendationsEntity>,
    IReadRepository<any, RecomendationsEntity> {
  getAll(): Promise<RecomendationsEntity[]>;
  findManyById(ids: string[]): Promise<RecomendationsEntity[]>;
}
