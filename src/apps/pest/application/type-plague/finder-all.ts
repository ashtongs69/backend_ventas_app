import { Injectable } from '@nestjs/common';

import { IUseCase } from 'src/global';

import { TypePlagueEntity } from '../../domain/entities/type-plague-entity';
import { TypePlagueRepository } from '../../infrastructure/repositories/type-plague-repository';

@Injectable()
export class TypePlagueFinderAllUseCase
  implements IUseCase<never, TypePlagueEntity[]>
{
  constructor(private typePlagueRepository: TypePlagueRepository) {}
  async execute(): Promise<TypePlagueEntity[]> {
    return await this.typePlagueRepository.getAll();
  }
}
