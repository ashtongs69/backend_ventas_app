import { Body, Controller, Get, Post } from '@nestjs/common';
import { ApiTags } from '@nestjs/swagger';

import { PhoneChangeCreatorUseCase } from '../../application/phone-change/creator';
import { PhoneChangeGetAllUseCase } from '../../application/phone-change/get-all';
import { PhoneChangeEntity } from '../../domain/entities/PhoneChangeEntity';
import { CreatePhoneChangeDto } from '../dto/phone-change';

@Controller('/phone-change')
@ApiTags('Phone Change')
export class PhoneChangeController {
  constructor(
    private phoneChangeCreatorUseCase: PhoneChangeCreatorUseCase,
    private phoneChangeGetAllUseCase: PhoneChangeGetAllUseCase,
  ) {}

  @Get('/query')
  async getAll(): Promise<PhoneChangeEntity[]> {
    return this.phoneChangeGetAllUseCase.execute();
  }
  @Post('/')
  async create(@Body() data: CreatePhoneChangeDto): Promise<PhoneChangeEntity> {
    return this.phoneChangeCreatorUseCase.execute(data);
  }
}
