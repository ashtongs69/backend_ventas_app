import { Body, Controller, Get, Param, Patch, Post } from '@nestjs/common';
import { ApiTags } from '@nestjs/swagger';

import { PlagueCreatorUseCase } from '../../application/plague/creator';
import { PlagueFinderAllUseCase } from '../../application/plague/finder-all';
import { PlagueUpdatorUseCase } from '../../application/plague/updator';
import { PlagueEntity } from '../../domain/entities/plague-entity';
import { CreatePlagueDTO, UpdatePlagueDTO } from '../dto/plague.dto';

@Controller('plagues')
@ApiTags('Plagues')
export class PlagueController {
  constructor(
    private readonly plagueCreatorUseCase: PlagueCreatorUseCase,
    private readonly plagueFinderAll: PlagueFinderAllUseCase,
    private readonly plagueUpdatorUseCase: PlagueUpdatorUseCase,
  ) {}

  @Post('/')
  async create(@Body() data: CreatePlagueDTO): Promise<PlagueEntity> {
    return this.plagueCreatorUseCase.execute(data);
  }

  @Get('/')
  async getAll(): Promise<PlagueEntity[]> {
    return this.plagueFinderAll.execute();
  }

  @Patch('/:id')
  async update(
    @Param('id') id: string,
    @Body() data: UpdatePlagueDTO,
  ): Promise<void> {
    return this.plagueUpdatorUseCase.execute({ data, id });
  }
}
