import { Injectable } from '@nestjs/common';

import { IUseCase } from 'src/global';

import { ProviderEntity } from '../../domain/entities/ProviderEntity';
import { ProviderRepository } from '../../infrastructure/repository/Provider.repository';

@Injectable()
export class ProviderGetAllUseCase
  implements IUseCase<never, ProviderEntity[]>
{
  constructor(private providerRepository: ProviderRepository) {}
  async execute(): Promise<ProviderEntity[]> {
    return this.providerRepository.getAll();
  }
}
