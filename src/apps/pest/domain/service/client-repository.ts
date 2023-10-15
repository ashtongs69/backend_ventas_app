import {
  IReadRepository,
  IWriteRepository,
} from 'src/shared/base/crud.repository';

import { ClientEntity } from '../entities/client-entity';

export interface IClientRepository
  extends IWriteRepository<ClientEntity>,
    IReadRepository<any, ClientEntity> {
  getAll(): Promise<ClientEntity[]>;
}
