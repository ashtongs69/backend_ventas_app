import { Injectable, NotFoundException } from '@nestjs/common';

import { IUseCase } from 'src/global';

import { UpdateRecomendationsDTO } from '../../infrastructure/dto/recomendations.dto';
import { RecomendationsRepository } from '../../infrastructure/repositories/recomendations-repository';

interface IInput {
  data: UpdateRecomendationsDTO;
  id: string;
}

@Injectable()
export class RecomendationsUpdatorUseCase implements IUseCase<IInput, void> {
  constructor(private recomendationsRepository: RecomendationsRepository) {}
  async execute({ data, id }: IInput): Promise<void> {
    const item = await this.recomendationsRepository.findOne({ id });

    if (!item) {
      throw new NotFoundException('No se encontro entidad Recomendations');
    }

    Object.assign(item, data);

    await this.recomendationsRepository.save(item);
  }
}
