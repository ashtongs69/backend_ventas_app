import { Injectable } from '@nestjs/common';

import { IUseCase } from 'src/global';

import { PlagueEntity } from '../../domain/entities/plague-entity';
import { PlagueRepository } from '../../infrastructure/repositories/plague-repository';

@Injectable()
export class PlagueFinderAllUseCase implements IUseCase<never, PlagueEntity[]> {
  constructor(private plagueRepository: PlagueRepository) {}
  async execute(): Promise<PlagueEntity[]> {
    return await this.plagueRepository.getAll();
  }
}
