import { Injectable, NotFoundException } from '@nestjs/common';

import { IUseCase } from 'src/global';

import { UpdateFrecuencyDTO } from '../../infrastructure/dto/frecuency.dto';
import { FrecuencyRepository } from '../../infrastructure/repositories/frecuency-repository';

interface IInput {
  data: UpdateFrecuencyDTO;
  id: string;
}

@Injectable()
export class FrecuencyUpdatorUseCase implements IUseCase<IInput, void> {
  constructor(private frecuencyRepository: FrecuencyRepository) {}
  async execute({ data, id }: IInput): Promise<void> {
    const item = await this.frecuencyRepository.findOne({ id });

    if (!item) {
      throw new NotFoundException('No se encontro entidad Frecuencye');
    }

    Object.assign(item, data);

    await this.frecuencyRepository.save(item);
  }
}
