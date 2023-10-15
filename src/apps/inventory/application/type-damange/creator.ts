import { Injectable } from '@nestjs/common';

import { IUseCase } from 'src/global';
import { generateUUID } from 'src/shared/utils/generateUUID';

import { TypeDamageEntity } from '../../domain/entities/TypeDamageEntity';
import { CreateTypeDamageDto } from '../../infrastructure/dto/type-damange';
import { TypeDamageRepository } from '../../infrastructure/repository/TypeDamage.repository';

@Injectable()
export class TypeDamageCreatorUseCase
  implements IUseCase<CreateTypeDamageDto, TypeDamageEntity>
{
  constructor(private typeDamageRepository: TypeDamageRepository) {}
  async execute(data: CreateTypeDamageDto): Promise<TypeDamageEntity> {
    const entity = new TypeDamageEntity({
      id: generateUUID(),
      ...data,
    });
    return await this.typeDamageRepository.save(entity);
  }
}
