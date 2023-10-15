import { Injectable } from '@nestjs/common';

import { IUseCase } from 'src/global';

import { RecomendationsEntity } from '../../domain/entities/recomendations-entity';
import { RecomendationsRepository } from '../../infrastructure/repositories/recomendations-repository';

@Injectable()
export class RecomendationsFinderAllUseCase
  implements IUseCase<never, RecomendationsEntity[]>
{
  constructor(private recomendationsRepository: RecomendationsRepository) {}
  async execute(): Promise<RecomendationsEntity[]> {
    return await this.recomendationsRepository.getAll();
  }
}
