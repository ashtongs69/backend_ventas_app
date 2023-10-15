import { Body, Controller, Get, Param, Patch, Post } from '@nestjs/common';
import { ApiTags } from '@nestjs/swagger';

import { RecomendationsCreatorUseCase } from '../../application/recomendations/creator';
import { RecomendationsFinderAllUseCase } from '../../application/recomendations/finder-all';
import { RecomendationsUpdatorUseCase } from '../../application/recomendations/updator';
import { RecomendationsEntity } from '../../domain/entities/recomendations-entity';
import {
  CreateRecomendationsDTO,
  UpdateRecomendationsDTO,
} from '../dto/recomendations.dto';

@Controller('recomendations')
@ApiTags('Recomendations')
export class RecomendationsController {
  constructor(
    private readonly recomendationsCreatorUseCase: RecomendationsCreatorUseCase,
    private readonly recomendationsFinderAll: RecomendationsFinderAllUseCase,
    private readonly recomendationsUpdatorUseCase: RecomendationsUpdatorUseCase,
  ) {}

  @Post('/')
  async create(
    @Body() data: CreateRecomendationsDTO,
  ): Promise<RecomendationsEntity> {
    return this.recomendationsCreatorUseCase.execute(data);
  }

  @Get('/')
  async getAll(): Promise<RecomendationsEntity[]> {
    return this.recomendationsFinderAll.execute();
  }

  @Patch('/:id')
  async update(
    @Param('id') id: string,
    @Body() data: UpdateRecomendationsDTO,
  ): Promise<void> {
    return this.recomendationsUpdatorUseCase.execute({ data, id });
  }
}
