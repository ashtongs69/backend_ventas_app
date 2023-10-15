import { Body, Controller, Get, Post } from '@nestjs/common';
import { ApiTags } from '@nestjs/swagger';

import { StorageCreatorUseCase } from '../../application/storage/creator';
import { StorageGetAllUseCase } from '../../application/storage/get-all';
import { StorageEntity } from '../../domain/entities/StorageEntity';
import { CreateStorageDto } from '../dto/storage.dto';

@Controller('/storage')
@ApiTags('Storage')
export class StorageController {
  constructor(
    private storageGetAllUseCase: StorageGetAllUseCase,
    private storageCreatorUseCase: StorageCreatorUseCase,
  ) {}

  @Get('/all')
  async registerUser(): Promise<StorageEntity[]> {
    return this.storageGetAllUseCase.execute();
  }

  @Post('/')
  async create(@Body() data: CreateStorageDto): Promise<StorageEntity> {
    return this.storageCreatorUseCase.execute(data);
  }
}
