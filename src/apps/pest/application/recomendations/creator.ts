import { Injectable } from '@nestjs/common';

import { IUseCase } from 'src/global';
import { generateUUID } from 'src/shared/utils/generateUUID';

import { RecomendationsEntity } from '../../domain/entities/recomendations-entity';
import { CreateRecomendationsDTO } from '../../infrastructure/dto/recomendations.dto';
import { RecomendationsRepository } from '../../infrastructure/repositories/recomendations-repository';

@Injectable()
export class RecomendationsCreatorUseCase
  implements IUseCase<CreateRecomendationsDTO, RecomendationsEntity>
{
  constructor(private recomendationsRepository: RecomendationsRepository) {}
  async execute(data: CreateRecomendationsDTO): Promise<RecomendationsEntity> {
    const values = new RecomendationsEntity({
      id: generateUUID(),
      ...data,
    });

    return await this.recomendationsRepository.save(values);
  }
}
