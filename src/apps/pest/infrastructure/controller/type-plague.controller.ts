import { Body, Controller, Get, Param, Patch, Post } from '@nestjs/common';
import { ApiTags } from '@nestjs/swagger';

import { TypePlagueCreatorUseCase } from '../../application/type-plague/creator';
import { TypePlagueFinderAllUseCase } from '../../application/type-plague/finder-all';
import { TypePlagueUpdatorUseCase } from '../../application/type-plague/updator';
import { TypePlagueEntity } from '../../domain/entities/type-plague-entity';
import {
  CreateTypePlagueDTO,
  UpdateTypePlagueDTO,
} from '../dto/type-plague.entity';

@Controller('typePlague')
@ApiTags('TypePlagues')
export class TypePlagueController {
  constructor(
    private readonly typePlagueCreatorUseCase: TypePlagueCreatorUseCase,
    private readonly typePlagueFinderAll: TypePlagueFinderAllUseCase,
    private readonly typePlagueUpdatorUseCase: TypePlagueUpdatorUseCase,
  ) {}

  @Post('/')
  async create(@Body() data: CreateTypePlagueDTO): Promise<TypePlagueEntity> {
    return this.typePlagueCreatorUseCase.execute(data);
  }

  @Get('/')
  async getAll(): Promise<TypePlagueEntity[]> {
    return this.typePlagueFinderAll.execute();
  }

  @Patch('/:id')
  async update(
    @Param('id') id: string,
    @Body() data: UpdateTypePlagueDTO,
  ): Promise<void> {
    return this.typePlagueUpdatorUseCase.execute({ data, id });
  }
}
