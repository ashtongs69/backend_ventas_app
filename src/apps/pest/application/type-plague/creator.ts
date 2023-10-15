import { Injectable } from '@nestjs/common';

import { IUseCase } from 'src/global';
import { generateUUID } from 'src/shared/utils/generateUUID';

import { TypePlagueEntity } from '../../domain/entities/type-plague-entity';
import { CreateTypePlagueDTO } from '../../infrastructure/dto/type-plague.entity';
import { TypePlagueRepository } from '../../infrastructure/repositories/type-plague-repository';

@Injectable()
export class TypePlagueCreatorUseCase
  implements IUseCase<CreateTypePlagueDTO, TypePlagueEntity>
{
  constructor(private typePlagueRepository: TypePlagueRepository) {}
  async execute(data: CreateTypePlagueDTO): Promise<TypePlagueEntity> {
    const values = new TypePlagueEntity({
      id: generateUUID(),
      ...data,
    });

    return await this.typePlagueRepository.save(values);
  }
}
