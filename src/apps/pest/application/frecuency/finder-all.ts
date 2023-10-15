import { Injectable } from '@nestjs/common';

import { IUseCase } from 'src/global';

import { FrecuencyEntity } from '../../domain/entities/frecuency-entity';
import { FrecuencyRepository } from '../../infrastructure/repositories/frecuency-repository';

@Injectable()
export class FrecuencyFinderAllUseCase
  implements IUseCase<never, FrecuencyEntity[]>
{
  constructor(private frecuencyRepository: FrecuencyRepository) {}
  async execute(): Promise<FrecuencyEntity[]> {
    return await this.frecuencyRepository.getAll();
  }
}
