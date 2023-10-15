import { Body, Controller, Get, Post } from '@nestjs/common';
import { ApiTags } from '@nestjs/swagger';

import { StoreCreatorUseCase } from '../../application/store/creator';
import { StoreGetAllUseCase } from '../../application/store/get-all';
import { StoreEntity } from '../../domain/entities/StoreEntity';
import { CreateStoreDto } from '../dto/store.dto';

@Controller('/store')
@ApiTags('Store')
export class StoreController {
  constructor(
    private storeGetAllUseCase: StoreGetAllUseCase,
    private storeCreatorUseCase: StoreCreatorUseCase,
  ) {}

  @Get('/all')
  async getAll(): Promise<StoreEntity[]> {
    return this.storeGetAllUseCase.execute();
  }

  @Post('/')
  async create(@Body() data: CreateStoreDto): Promise<StoreEntity> {
    return this.storeCreatorUseCase.execute(data);
  }
}
