import { Injectable } from '@nestjs/common';

import { IUseCase } from 'src/global';
import { generateUUID } from 'src/shared/utils/generateUUID';

import { ClientEntity } from '../../domain/entities/client-entity';
import { CreateClientDTO } from '../../infrastructure/dto/client.dto';
import { ClientRepository } from '../../infrastructure/repositories/client-repository';

@Injectable()
export class ClientCreatorUseCase
  implements IUseCase<CreateClientDTO, ClientEntity>
{
  constructor(private clientRepository: ClientRepository) {}
  async execute(data: CreateClientDTO): Promise<ClientEntity> {
    const values = new ClientEntity({
      id: generateUUID(),
      ...data,
    });

    const newColor = await this.clientRepository.save(values);
    return newColor;
  }
}
