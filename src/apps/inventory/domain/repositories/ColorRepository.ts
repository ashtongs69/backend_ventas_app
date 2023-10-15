import { IWriteRepository } from 'src/shared/base/crud.repository';

import { ColorEntity } from '../entities/ColorEntity';

export interface IColorRepository extends IWriteRepository<ColorEntity> {
  getAll(): Promise<ColorEntity[]>;
  findById(id: string): Promise<ColorEntity | null>;
}
