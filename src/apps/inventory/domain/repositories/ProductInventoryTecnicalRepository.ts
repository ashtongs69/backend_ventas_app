import { UserEntity } from 'src/apps/user/domain/entity/UserEntity';
import { IReadRepository } from 'src/shared/base/crud.repository';

import {
  EStatusProductInventoryTechnical,
  ProductInventoryTechnicalEntity,
  ProductInventoryTechnicalQuery,
} from '../entities/ProductInventoryTechnicalEntity';

export interface IProductInventoryTecnicalRepository
  extends IReadRepository<
    ProductInventoryTechnicalQuery,
    ProductInventoryTechnicalEntity
  > {
  save(
    data: ProductInventoryTechnicalEntity,
  ): Promise<ProductInventoryTechnicalEntity | null>;

  changeStatus(
    id: string,
    status: EStatusProductInventoryTechnical,
  ): Promise<ProductInventoryTechnicalEntity | null>;

  updateTechnical(id: string, technical: UserEntity): Promise<void>;
}
