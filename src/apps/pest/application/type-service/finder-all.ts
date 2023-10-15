import { Injectable } from '@nestjs/common';

import { IUseCase } from 'src/global';

import { TypeServiceEntity } from '../../domain/entities/type-service-entity';
import { TypeServiceRepository } from '../../infrastructure/repositories/type-service-repository';

@Injectable()
export class TypeServiceFinderAllUseCase
  implements IUseCase<never, TypeServiceEntity[]>
{
  constructor(private typeServiceRepository: TypeServiceRepository) {}
  async execute(): Promise<TypeServiceEntity[]> {
    return await this.typeServiceRepository.getAll();
  }
}
