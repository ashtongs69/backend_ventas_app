import { Injectable, NotFoundException } from '@nestjs/common';

import { IUseCase } from 'src/global';

import { UpdateTypeServiceDTO } from '../../infrastructure/dto/type-service.dto';
import { TypeServiceRepository } from '../../infrastructure/repositories/type-service-repository';

interface IInput {
  data: UpdateTypeServiceDTO;
  id: string;
}

@Injectable()
export class TypeServiceUpdatorUseCase implements IUseCase<IInput, void> {
  constructor(private typeServiceRepository: TypeServiceRepository) {}
  async execute({ data, id }: IInput): Promise<void> {
    const item = await this.typeServiceRepository.findOne({ id });

    if (!item) {
      throw new NotFoundException('No se encontro entidad TypeService');
    }

    Object.assign(item, data);

    await this.typeServiceRepository.save(item);
  }
}
