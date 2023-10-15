import { Injectable, NotFoundException } from '@nestjs/common';

import { IUseCase } from 'src/global';

import { UpdateClientDTO } from '../../infrastructure/dto/client.dto';
import { ClientRepository } from '../../infrastructure/repositories/client-repository';

interface IInput {
  data: UpdateClientDTO;
  id: string;
}

@Injectable()
export class ClientUpdatorUseCase implements IUseCase<IInput, void> {
  constructor(private clientRepository: ClientRepository) {}
  async execute({ data, id }: IInput): Promise<void> {
    const item = await this.clientRepository.findOne({ id });

    if (!item) {
      throw new NotFoundException('No se encontro entidad cliente');
    }

    Object.assign(item, data);

    await this.clientRepository.save(item);
  }
}
