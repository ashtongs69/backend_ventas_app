import { Body, Controller, Get, Post } from '@nestjs/common';
import { ApiTags } from '@nestjs/swagger';

import { SalesCreatorUseCase } from '../../application/sales/creator';
import { SalesGetAllUseCase } from '../../application/sales/get-all';
import { SalesEntity } from '../../domain/entities/SalesEntity';
import { CreateSalesDto } from '../dto/sales.dto';

@Controller('/sales')
@ApiTags('Sales')
export class SalesController {
  constructor(
    private salesGetAllUseCase: SalesGetAllUseCase,
    private salesCreatorUseCase: SalesCreatorUseCase,
  ) {}

  @Get('/all')
  async getAll(): Promise<SalesEntity[]> {
    return this.salesGetAllUseCase.execute();
  }
  @Post('/')
  async create(@Body() data: CreateSalesDto): Promise<SalesEntity> {
    return this.salesCreatorUseCase.execute(data);
  }
}
