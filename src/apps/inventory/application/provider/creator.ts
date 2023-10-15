import { Injectable } from '@nestjs/common';

import { IUseCase } from 'src/global';
import { generateUUID } from 'src/shared/utils/generateUUID';

import { ProviderEntity } from '../../domain/entities/ProviderEntity';
import { CreateProviderDto } from '../../infrastructure/dto/provider.dto';
import { ProviderRepository } from '../../infrastructure/repository/Provider.repository';

@Injectable()
export class ProviderCreatorUseCase
  implements IUseCase<CreateProviderDto, ProviderEntity>
{
  constructor(private providerRepository: ProviderRepository) {}
  async execute(data: CreateProviderDto): Promise<ProviderEntity> {
    const entity = new ProviderEntity({
      id: generateUUID(),
      ...data,
    });
    return await this.providerRepository.save(entity);
  }
}
