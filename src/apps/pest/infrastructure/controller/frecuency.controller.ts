import { Body, Controller, Get, Param, Patch, Post } from '@nestjs/common';
import { ApiTags } from '@nestjs/swagger';

import { FrecuencyCreatorUseCase } from '../../application/frecuency/creator';
import { FrecuencyFinderAllUseCase } from '../../application/frecuency/finder-all';
import { FrecuencyUpdatorUseCase } from '../../application/frecuency/updator';
import { FrecuencyEntity } from '../../domain/entities/frecuency-entity';
import { CreateFrecuencyDTO, UpdateFrecuencyDTO } from '../dto/frecuency.dto';

@Controller('frecuency')
@ApiTags('Frecuency')
export class FrecuencyController {
  constructor(
    private readonly frecuencyCreatorUseCase: FrecuencyCreatorUseCase,
    private readonly frecuencyFinderAll: FrecuencyFinderAllUseCase,
    private readonly frecuencyUpdatorUseCase: FrecuencyUpdatorUseCase,
  ) {}

  @Post('/')
  async create(@Body() data: CreateFrecuencyDTO): Promise<FrecuencyEntity> {
    return this.frecuencyCreatorUseCase.execute(data);
  }

  @Get('/')
  async getAll(): Promise<FrecuencyEntity[]> {
    return this.frecuencyFinderAll.execute();
  }

  @Patch('/:id')
  async update(
    @Param('id') id: string,
    @Body() data: UpdateFrecuencyDTO,
  ): Promise<void> {
    return this.frecuencyUpdatorUseCase.execute({ data, id });
  }
}
