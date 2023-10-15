import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';

import { ClientEntity } from '../../domain/entities/client-entity';
import { IClientRepository } from '../../domain/service/client-repository';
import { Client } from '../models/client.entity';

export class ClientRepository implements IClientRepository {
  constructor(
    @InjectRepository(Client)
    private clientRepository: Repository<Client>,
  ) {}

  async findOne(values: Partial<any>): Promise<ClientEntity> {
    try {
      const data = await this.clientRepository.findOneOrFail({
        where: { ...values },
      });

      return new ClientEntity(data);
    } catch {
      return null;
    }
  }
  async find(values: Partial<any>): Promise<[] | ClientEntity[]> {
    const clients = await this.clientRepository.find({
      where: { ...values },
    });

    return clients.map((i) => new ClientEntity(i));
  }
  async findById(id: string): Promise<ClientEntity> {
    try {
      const item = await this.clientRepository.findOneByOrFail({ id });
      return new ClientEntity(item);
    } catch {
      return null;
    }
  }

  async getAll(): Promise<ClientEntity[]> {
    const clients = await this.clientRepository.find();
    return clients.map((i) => new ClientEntity(i));
  }

  async save(value: ClientEntity): Promise<ClientEntity> {
    const client = await this.clientRepository.save(value);
    return new ClientEntity(client);
  }

  async deleteOne(id: string): Promise<void> {
    await this.clientRepository.delete(id);
  }
}
