import { Injectable } from '@nestjs/common';

import { IUseCase } from 'src/global';
import { generateUUID } from 'src/shared/utils/generateUUID';

import { StoreEntity } from '../../domain/entities/StoreEntity';
import { CreateStoreDto } from '../../infrastructure/dto/store.dto';
import { StoreRepository } from '../../infrastructure/repository/Store.repository';

@Injectable()
export class StoreCreatorUseCase
  implements IUseCase<CreateStoreDto, StoreEntity>
{
  constructor(private StoreModelRepository: StoreRepository) {}
  async execute(data: CreateStoreDto): Promise<StoreEntity> {
    const newStoreEntity = new StoreEntity({
      id: generateUUID(),
      ...data,
    });

    const newStore = await this.StoreModelRepository.save(newStoreEntity);
    return newStore;
  }
}
