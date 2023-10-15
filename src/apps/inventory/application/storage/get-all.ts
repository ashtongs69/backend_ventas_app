import { Injectable } from '@nestjs/common';

import { IUseCase } from 'src/global';

import { StorageEntity } from '../../domain/entities/StorageEntity';
import { StorageRepository } from '../../infrastructure/repository/Storage.repository';

@Injectable()
export class StorageGetAllUseCase implements IUseCase<never, StorageEntity[]> {
  constructor(private storageRepository: StorageRepository) {}
  async execute(): Promise<StorageEntity[]> {
    return this.storageRepository.getAll();
  }
}
