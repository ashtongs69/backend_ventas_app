import { Body, Controller, Get, Post } from '@nestjs/common';
import { ApiTags } from '@nestjs/swagger';

import { ProviderCreatorUseCase } from '../../application/provider/creator';
import { ProviderGetAllUseCase } from '../../application/provider/get-all';
import { ProviderEntity } from '../../domain/entities/ProviderEntity';
import { CreateProviderDto } from '../dto/provider.dto';

@Controller('/provider')
@ApiTags('Provider')
export class ProviderController {
  constructor(
    private providerGetAllUseCase: ProviderGetAllUseCase,
    private providerCreatorUseCase: ProviderCreatorUseCase,
  ) {}

  @Get('/all')
  async registerUser(): Promise<ProviderEntity[]> {
    return this.providerGetAllUseCase.execute();
  }

  @Post('/')
  async create(@Body() data: CreateProviderDto): Promise<ProviderEntity> {
    return this.providerCreatorUseCase.execute(data);
  }
}
