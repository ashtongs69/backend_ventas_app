import { Injectable, NotFoundException } from '@nestjs/common';

import { IUseCase } from 'src/global';
import { generateUUID } from 'src/shared/utils/generateUUID';

import { PlagueEntity } from '../../domain/entities/plague-entity';
import { CreatePlagueDTO } from '../../infrastructure/dto/plague.dto';
import { ClientRepository } from '../../infrastructure/repositories/client-repository';
import { FrecuencyRepository } from '../../infrastructure/repositories/frecuency-repository';
import { PlagueRepository } from '../../infrastructure/repositories/plague-repository';
import { RecomendationsRepository } from '../../infrastructure/repositories/recomendations-repository';
import { TypePlagueRepository } from '../../infrastructure/repositories/type-plague-repository';
import { TypeServiceRepository } from '../../infrastructure/repositories/type-service-repository';

@Injectable()
export class PlagueCreatorUseCase
  implements IUseCase<CreatePlagueDTO, PlagueEntity>
{
  constructor(
    private frecuencyRepository: FrecuencyRepository,
    private clientRepository: ClientRepository,
    private recomendationsRepository: RecomendationsRepository,
    private typePlagueRepository: TypePlagueRepository,
    private typeServiceRepository: TypeServiceRepository,
    private plagueRepository: PlagueRepository,
  ) {}
  async execute(data: CreatePlagueDTO): Promise<PlagueEntity> {
    const client = await this.clientRepository.findOne({ id: data.client });

    if (!client) {
      throw new NotFoundException('No se encontro cliente');
    }

    const typePlague = await this.typePlagueRepository.findManyById(
      data.typePlague,
    );

    const typeService = await this.typeServiceRepository.findManyById(
      data.typeService,
    );

    const frecuency = await this.frecuencyRepository.findManyById(
      data.frecuency,
    );

    const recomendations = await this.recomendationsRepository.findManyById(
      data.recomendations,
    );

    const values = new PlagueEntity({
      id: generateUUID(),
      ...data,
      client,
      typePlague,
      typeService,
      frecuency,
      recomendations,
    });

    console.log(values);

    return await this.plagueRepository.save(values);
  }
}
