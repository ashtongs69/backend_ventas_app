import { Body, Controller, Get, Post } from '@nestjs/common';
import { ApiTags } from '@nestjs/swagger';

import { ContactCustomerCreatorUseCase } from '../../application/contact-customer/creator';
import { ContactCustomerGetAllUseCase } from '../../application/contact-customer/get-all';
import { ContactCustomerEntity } from '../../domain/entities/ContactCustomerEntity';
import { CreateCustomerDTO } from '../dto/customer';

@Controller('/customer-contact')
@ApiTags('Customer Contact')
export class CustomerContactController {
  constructor(
    private contactCustomerCreatorUseCase: ContactCustomerCreatorUseCase,
    private contactCustomerGetAllUseCase: ContactCustomerGetAllUseCase,
  ) {}

  @Get('/all')
  async getAll(): Promise<ContactCustomerEntity[]> {
    return this.contactCustomerGetAllUseCase.execute();
  }
  @Post('/')
  async create(
    @Body() data: CreateCustomerDTO,
  ): Promise<ContactCustomerEntity> {
    return this.contactCustomerCreatorUseCase.execute(data);
  }
}
