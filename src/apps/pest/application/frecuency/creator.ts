import { Injectable } from '@nestjs/common';

import { IUseCase } from 'src/global';
import { generateUUID } from 'src/shared/utils/generateUUID';

import { FrecuencyEntity } from '../../domain/entities/frecuency-entity';
import { CreateFrecuencyDTO } from '../../infrastructure/dto/frecuency.dto';
import { FrecuencyRepository } from '../../infrastructure/repositories/frecuency-repository';

@Injectable()
export class FrecuencyCreatorUseCase
  implements IUseCase<CreateFrecuencyDTO, FrecuencyEntity>
{
  constructor(private frecuencyRepository: FrecuencyRepository) {}
  async execute(data: CreateFrecuencyDTO): Promise<FrecuencyEntity> {
    const values = new FrecuencyEntity({
      id: generateUUID(),
      ...data,
    });

    return await this.frecuencyRepository.save(values);
  }
}
