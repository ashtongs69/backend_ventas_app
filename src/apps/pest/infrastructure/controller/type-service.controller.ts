import { Body, Controller, Get, Param, Patch, Post } from '@nestjs/common';
import { ApiTags } from '@nestjs/swagger';

import { TypeServiceCreatorUseCase } from '../../application/type-service/creator';
import { TypeServiceFinderAllUseCase } from '../../application/type-service/finder-all';
import { TypeServiceUpdatorUseCase } from '../../application/type-service/updator';
import { TypeServiceEntity } from '../../domain/entities/type-service-entity';
import {
  CreateTypeServiceDTO,
  UpdateTypeServiceDTO,
} from '../dto/type-service.dto';

@Controller('typeService')
@ApiTags('TypeServices')
export class TypeServiceController {
  constructor(
    private readonly typeServiceCreatorUseCase: TypeServiceCreatorUseCase,
    private readonly typeServiceFinderAll: TypeServiceFinderAllUseCase,
    private readonly typeServiceUpdatorUseCase: TypeServiceUpdatorUseCase,
  ) {}

  @Post('/')
  async create(@Body() data: CreateTypeServiceDTO): Promise<TypeServiceEntity> {
    return this.typeServiceCreatorUseCase.execute(data);
  }

  @Get('/')
  async getAll(): Promise<TypeServiceEntity[]> {
    return this.typeServiceFinderAll.execute();
  }

  @Patch('/:id')
  async update(
    @Param('id') id: string,
    @Body() data: UpdateTypeServiceDTO,
  ): Promise<void> {
    return this.typeServiceUpdatorUseCase.execute({ data, id });
  }
}
