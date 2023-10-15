import { Injectable } from '@nestjs/common';

import { IUseCase } from 'src/global';

import { TypeDamageEntity } from '../../domain/entities/TypeDamageEntity';
import { TypeDamageRepository } from '../../infrastructure/repository/TypeDamage.repository';

@Injectable()
export class TypeDamageGetAllUseCase
  implements IUseCase<never, TypeDamageEntity[]>
{
  constructor(private typeDamageRepository: TypeDamageRepository) {}
  async execute(): Promise<TypeDamageEntity[]> {
    return this.typeDamageRepository.getAll();
  }
}
