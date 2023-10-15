import { Injectable } from '@nestjs/common';

import { IUseCase } from 'src/global';
import { generateUUID } from 'src/shared/utils/generateUUID';

import { TypeServiceEntity } from '../../domain/entities/type-service-entity';
import { CreateTypeServiceDTO } from '../../infrastructure/dto/type-service.dto';
import { TypeServiceRepository } from '../../infrastructure/repositories/type-service-repository';

@Injectable()
export class TypeServiceCreatorUseCase
  implements IUseCase<CreateTypeServiceDTO, TypeServiceEntity>
{
  constructor(private typeServiceRepository: TypeServiceRepository) {}
  async execute(data: CreateTypeServiceDTO): Promise<TypeServiceEntity> {
    const values = new TypeServiceEntity({
      id: generateUUID(),
      ...data,
    });

    return await this.typeServiceRepository.save(values);
  }
}
