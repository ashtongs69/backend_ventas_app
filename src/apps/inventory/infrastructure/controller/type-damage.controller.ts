import { Body, Controller, Get, Post } from '@nestjs/common';
import { ApiTags } from '@nestjs/swagger';

import { TypeDamageCreatorUseCase } from '../../application/type-damange/creator';
import { TypeDamageGetAllUseCase } from '../../application/type-damange/get-all';
import { ColorEntity } from '../../domain/entities/ColorEntity';
import { CreateTypeDamageDto } from '../dto/type-damange';

@Controller('/type-damage')
@ApiTags('Type Damage')
export class TypeDamageController {
  constructor(
    private typeDamageGetAllUseCase: TypeDamageGetAllUseCase,
    private typeDamageCreatorUseCase: TypeDamageCreatorUseCase,
  ) {}

  @Get('/all')
  async getAll(): Promise<ColorEntity[]> {
    return this.typeDamageGetAllUseCase.execute();
  }
  @Post('/')
  async create(@Body() data: CreateTypeDamageDto): Promise<ColorEntity> {
    return this.typeDamageCreatorUseCase.execute(data);
  }
}
