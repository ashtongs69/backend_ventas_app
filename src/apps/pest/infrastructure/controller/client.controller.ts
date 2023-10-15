import { Body, Controller, Get, Param, Patch, Post } from '@nestjs/common';
import { ApiTags } from '@nestjs/swagger';

import { ClientCreatorUseCase } from '../../application/client/creator';
import { ClientFinderAllUseCase } from '../../application/client/finder-all';
import { ClientUpdatorUseCase } from '../../application/client/updator';
import { ClientEntity } from '../../domain/entities/client-entity';
import { CreateClientDTO, UpdateClientDTO } from '../dto/client.dto';

@Controller('clients')
@ApiTags('Clients')
export class ClientController {
  constructor(
    private readonly clientCreatorUseCase: ClientCreatorUseCase,
    private readonly clientFinderAll: ClientFinderAllUseCase,
    private readonly clientUpdatorUseCase: ClientUpdatorUseCase,
  ) {}

  @Post('/')
  async create(@Body() data: CreateClientDTO): Promise<ClientEntity> {
    return this.clientCreatorUseCase.execute(data);
  }

  @Get('/')
  async getAll(): Promise<ClientEntity[]> {
    return this.clientFinderAll.execute();
  }

  @Patch('/:id')
  async update(
    @Param('id') id: string,
    @Body() data: UpdateClientDTO,
  ): Promise<void> {
    return this.clientUpdatorUseCase.execute({ data, id });
  }
}
