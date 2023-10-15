import { Body, Controller, Get, Post } from '@nestjs/common';
import { ApiTags } from '@nestjs/swagger';

import { PhoneModelCreatorUseCase } from '../../application/phone-model/creator';
import { PhoneModelGetAllUseCase } from '../../application/phone-model/get-all';
import { PhoneModelEntity } from '../../domain/entities/PhoneModelEntity';
import { CreatePhoneModelDto } from '../dto/phone-model.dto';

@Controller('/phone-model')
@ApiTags('PhoneModel')
export class PhoneModelController {
  constructor(
    private phoneModelGetAllUseCase: PhoneModelGetAllUseCase,
    private phoneModelCreatorUseCase: PhoneModelCreatorUseCase,
  ) {}

  @Get('/all')
  async registerUser(): Promise<PhoneModelEntity[]> {
    return this.phoneModelGetAllUseCase.execute();
  }
  @Post('/')
  async create(@Body() data: CreatePhoneModelDto): Promise<PhoneModelEntity> {
    return this.phoneModelCreatorUseCase.execute(data);
  }
}
