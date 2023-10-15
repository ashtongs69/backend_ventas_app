import { IReadRepository } from 'src/shared/base/crud.repository';

import {
  EStatusProductInventoryPhone,
  ProductInventoryPhoneEntity,
  ProductInventoryPhoneQuery,
} from '../entities/ProductInventoryPhoneEntity';

// eslint-disable-next-line @typescript-eslint/naming-convention
export interface IProductInventoryPhoneRepository
  extends IReadRepository<
    ProductInventoryPhoneQuery,
    ProductInventoryPhoneEntity
  > {
  save(
    data: ProductInventoryPhoneEntity,
  ): Promise<ProductInventoryPhoneEntity | null>;

  updateStatus(
    id: string,
    status: EStatusProductInventoryPhone,
  ): Promise<ProductInventoryPhoneEntity | null>;
  findManyById(ids: string[]): Promise<ProductInventoryPhoneEntity[]>;
}
