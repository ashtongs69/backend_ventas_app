import { Body, Controller, Get, Param, Patch, Post } from '@nestjs/common';
import { ApiTags } from '@nestjs/swagger';

import { ProductInventoryTechnicalAssignTecnicalUseCase } from '../../application/product-inventory-technical/assign-technical.ts';
import { ProductInventoryTechnicalChangeStatusUseCase } from '../../application/product-inventory-technical/change-status';
import { ProductInventoryTechnicalFixPhoneUseCase } from '../../application/product-inventory-technical/fix-phone.js';
import { ProductInventoryTechnicalGetByQueryUseCase } from '../../application/product-inventory-technical/get-by-query';
import { ProductInventoryTechnicalEntity } from '../../domain/entities/ProductInventoryTechnicalEntity';
import { ChangeStatusProductInventoryTechnicalDTO } from '../dto/product-inventory-technical.dto';

@Controller('/product-inventory-technical')
@ApiTags('Technical Inventory')
export class ProductInventoryTechnicalController {
  constructor(
    private productInventoryTechnicalAssignTecnicalUseCase: ProductInventoryTechnicalAssignTecnicalUseCase,
    private productInventoryTechnicalFixPhoneUseCase: ProductInventoryTechnicalFixPhoneUseCase,
    private productInventoryTechnicalChangeStatusUseCase: ProductInventoryTechnicalChangeStatusUseCase,
    private productInventoryTechnicalGetByQueryUseCase: ProductInventoryTechnicalGetByQueryUseCase,
  ) {}

  @Get('/query')
  async query(): Promise<ProductInventoryTechnicalEntity[]> {
    return this.productInventoryTechnicalGetByQueryUseCase.execute();
  }

  @Patch('/:productId/assign-technical/:technicalId')
  async create(
    @Param('productId') productId: string,
    @Param('technicalId') technicalId: string,
  ): Promise<void> {
    return this.productInventoryTechnicalAssignTecnicalUseCase.execute({
      productId,
      technicalId,
    });
  }

  @Post('/fix-phone/:id')
  async fixPhone(@Param('id') id: string): Promise<void> {
    return this.productInventoryTechnicalFixPhoneUseCase.execute(id);
  }

  @Patch('/:id')
  async changeStatus(
    @Body() data: ChangeStatusProductInventoryTechnicalDTO,
    @Param('id') id: string,
  ): Promise<ProductInventoryTechnicalEntity> {
    return this.productInventoryTechnicalChangeStatusUseCase.execute({
      id,
      ...data,
    });
  }
}
