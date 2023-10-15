import { Injectable } from '@nestjs/common';

import { IUseCase } from 'src/global';

import { StoreEntity } from '../../domain/entities/StoreEntity';
import { StoreRepository } from '../../infrastructure/repository/Store.repository';

@Injectable()
export class StoreGetAllUseCase implements IUseCase<never, StoreEntity[]> {
  constructor(private storeModelRepository: StoreRepository) {}
  async execute(): Promise<StoreEntity[]> {
    return this.storeModelRepository.getAll();
  }
}
