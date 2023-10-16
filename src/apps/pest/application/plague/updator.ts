import { Injectable, NotFoundException } from '@nestjs/common';

import { IUseCase } from 'src/global';

import { UpdatePlagueDTO } from '../../infrastructure/dto/plague.dto';
import { ClientRepository } from '../../infrastructure/repositories/client-repository';
import { FrecuencyRepository } from '../../infrastructure/repositories/frecuency-repository';
import { PlagueRepository } from '../../infrastructure/repositories/plague-repository';
import { RecomendationsRepository } from '../../infrastructure/repositories/recomendations-repository';
import { TypePlagueRepository } from '../../infrastructure/repositories/type-plague-repository';
import { TypeServiceRepository } from '../../infrastructure/repositories/type-service-repository';

interface IInput {
  data: UpdatePlagueDTO;
  id: string;
}

@Injectable()
export class PlagueUpdatorUseCase implements IUseCase<IInput, void> {
  constructor(
    private frecuencyRepository: FrecuencyRepository,
    private clientRepository: ClientRepository,
    private recomendationsRepository: RecomendationsRepository,
    private typePlagueRepository: TypePlagueRepository,
    private typeServiceRepository: TypeServiceRepository,
    private plagueRepository: PlagueRepository,
  ) {}
  async execute({ data, id }: IInput): Promise<void> {
    const item = await this.plagueRepository.findOne({ id });

    if (!item) {
      throw new NotFoundException('No se encontró entidad Plague');
    }
    const client = await this.clientRepository.findOne({ id: data.client });

    if (!client) {
      throw new NotFoundException('No se encontro cliente');
    }

    if (data.typePlague) {
      item.typePlague = await this.typePlagueRepository.findManyById(
        data.typePlague,
      );
    }

    if (data.typeService) {
      item.typeService = await this.typeServiceRepository.findManyById(
        data.typeService,
      );
    }

    if (data.frecuency) {
      item.frecuency = await this.frecuencyRepository.findManyById(
        data.frecuency,
      );
    }

    if (data.recomendations) {
      item.recomendations = await this.recomendationsRepository.findManyById(
        data.recomendations,
      );
    }
    Object.assign(item, {
      ...data,
    });
    console.log(item);

    await this.plagueRepository.save(item);
  }
}
