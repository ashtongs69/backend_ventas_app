import { Injectable, NotFoundException } from '@nestjs/common';

import { IUseCase } from 'src/global';
import { generateUUID } from 'src/shared/utils/generateUUID';

import {
  EStatusPlague,
  ETypePlague,
  PlagueEntity,
} from '../../domain/entities/plague-entity';
import { CreateFollowUpDTO } from '../../infrastructure/dto/plague.dto';
import { PlagueRepository } from '../../infrastructure/repositories/plague-repository';

@Injectable()
export class PlagueCreatorFollowUpUseCase
  implements IUseCase<CreateFollowUpDTO, PlagueEntity>
{
  constructor(private plagueRepository: PlagueRepository) {}
  async execute(data: CreateFollowUpDTO): Promise<PlagueEntity> {
    const { date, id, observations } = data;

    const plagueBase = await this.plagueRepository.findOne({ id });

    if (!plagueBase) {
      throw new NotFoundException('No se encontro plaga');
    }

    plagueBase.dateFollowUp = date;

    const newEntity = new PlagueEntity({
      ...plagueBase,
      id: generateUUID(),
      date,
      type: ETypePlague.FOLLOW_UP,
      status: EStatusPlague.NO_REALIZED,
      observations,
    });

    await this.plagueRepository.save(plagueBase);
    return await this.plagueRepository.save(newEntity);
  }
}
