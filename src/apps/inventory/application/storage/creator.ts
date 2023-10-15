import { Injectable } from '@nestjs/common';

import { IUseCase } from 'src/global';
import { generateUUID } from 'src/shared/utils/generateUUID';

import { StorageEntity } from '../../domain/entities/StorageEntity';
import { CreateStorageDto } from '../../infrastructure/dto/storage.dto';
import { StorageRepository } from '../../infrastructure/repository/Storage.repository';

@Injectable()
export class StorageCreatorUseCase
  implements IUseCase<CreateStorageDto, StorageEntity>
{
  constructor(private storageRepository: StorageRepository) {}
  async execute(data: CreateStorageDto): Promise<StorageEntity> {
    const entity = new StorageEntity({
      id: generateUUID(),
      ...data,
    });
    return await this.storageRepository.save(entity);
  }
}
