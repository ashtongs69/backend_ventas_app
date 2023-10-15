import { Body, Controller, Get, Param, Patch, Post } from '@nestjs/common';
import { ApiTags } from '@nestjs/swagger';

import { ProductInventoryPhoneChangeStatusUseCase } from '../../application/product-inventory-phone/change-status';
import { ProductInventoryPhoneCreatorUseCase } from '../../application/product-inventory-phone/creator';
import { ProductInventoryPhoneGetByNameUseCase } from '../../application/product-inventory-phone/find-by-name';
import { ProductInventoryPhoneGetByIdUseCase } from '../../application/product-inventory-phone/get-by-id';
import { ProductInventoryPhoneGetByQueryUseCase } from '../../application/product-inventory-phone/get-by-query';
import { ProductInventoryPhoneUpdatorUseCase } from '../../application/product-inventory-phone/updator';
import { ProductInventoryPhoneEntity } from '../../domain/entities/ProductInventoryPhoneEntity';
import {
  ChangeStatusProductInventoryPhoneDTO,
  CreateProductInventoryPhoneDTO,
  FindByNameProductInventoryPhoneDTO,
  UpdateProductInventoryPhoneDTO,
} from '../dto/product-inventory-phone.dto';

@Controller('/product-inventory-phone')
@ApiTags('Phone Inventory')
export class ProductInventoryPhoneController {
  constructor(
    private productInventoryPhoneGetByQueryUseCase: ProductInventoryPhoneGetByQueryUseCase,
    private productInventoryPhoneChangeStatusUseCase: ProductInventoryPhoneChangeStatusUseCase,
    private productInventoryPhoneCreatorUseCase: ProductInventoryPhoneCreatorUseCase,
    private productInventoryPhoneUpdatorUseCase: ProductInventoryPhoneUpdatorUseCase,
    private productInventoryPhoneGetByIdUseCase: ProductInventoryPhoneGetByIdUseCase,
    private productInventoryPhoneGetByNameUseCase: ProductInventoryPhoneGetByNameUseCase,
  ) {}

  @Get('/query')
  async query(): Promise<ProductInventoryPhoneEntity[]> {
    return this.productInventoryPhoneGetByQueryUseCase.execute({});
  }
  @Post('/find-by-name')
  async findByName(
    @Body() data: FindByNameProductInventoryPhoneDTO,
  ): Promise<any[]> {
    return this.productInventoryPhoneGetByNameUseCase.execute(data.name);
  }

  @Get('/:id')
  async getById(@Param('id') id: string): Promise<ProductInventoryPhoneEntity> {
    return this.productInventoryPhoneGetByIdUseCase.execute(id);
  }

  @Post('/')
  async create(
    @Body() data: CreateProductInventoryPhoneDTO,
  ): Promise<ProductInventoryPhoneEntity> {
    return this.productInventoryPhoneCreatorUseCase.execute(data);
  }

  @Patch('/:id')
  async changeStatus(
    @Body() data: ChangeStatusProductInventoryPhoneDTO,
    @Param('id') id: string,
  ): Promise<ProductInventoryPhoneEntity> {
    return this.productInventoryPhoneChangeStatusUseCase.execute({
      id,
      ...data,
    });
  }
  @Patch('/update/:id')
  async update(
    @Body() data: UpdateProductInventoryPhoneDTO,
    @Param('id') id: string,
  ): Promise<ProductInventoryPhoneEntity> {
    return this.productInventoryPhoneUpdatorUseCase.execute({
      id,
      data,
    });
  }
}
