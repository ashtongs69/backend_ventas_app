import { Injectable } from '@nestjs/common';

import { IUseCase } from 'src/global';

import { ClientEntity } from '../../domain/entities/client-entity';
import { ClientRepository } from '../../infrastructure/repositories/client-repository';

@Injectable()
export class ClientFinderAllUseCase implements IUseCase<never, ClientEntity[]> {
  constructor(private clientRepository: ClientRepository) {}
  async execute(): Promise<ClientEntity[]> {
    return await this.clientRepository.getAll();
  }
}
