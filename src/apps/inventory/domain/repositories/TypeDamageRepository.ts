import { TypeDamageEntity } from '../entities/TypeDamageEntity';

export interface ITypeDamageRepository {
  findById(id: string): Promise<TypeDamageEntity | null>;
  save(data: TypeDamageEntity): Promise<TypeDamageEntity | null>;
  getAll(): Promise<TypeDamageEntity[]>;
  findManyById(ids: string[]): Promise<TypeDamageEntity[]>;
}
