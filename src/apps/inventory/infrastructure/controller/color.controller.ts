import { Body, Controller, Get, Post } from '@nestjs/common';
import { ApiTags } from '@nestjs/swagger';

import { ColorCreatorUseCase } from '../../application/color/creator';
import { ColorGetAllUseCase } from '../../application/color/get-all';
import { ColorEntity } from '../../domain/entities/ColorEntity';
import { CreateColorDto } from '../dto/color.dto';

@Controller('/color')
@ApiTags('Color')
export class ColorController {
  constructor(
    private colorGetAllUseCase: ColorGetAllUseCase,
    private colorCreatorUseCase: ColorCreatorUseCase,
  ) {}

  @Get('/all')
  async getAll(): Promise<ColorEntity[]> {
    return this.colorGetAllUseCase.execute();
  }
  @Post('/')
  async create(@Body() data: CreateColorDto): Promise<ColorEntity> {
    return this.colorCreatorUseCase.execute(data);
  }
}
