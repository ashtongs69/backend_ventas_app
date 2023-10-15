import { Injectable, NotFoundException } from '@nestjs/common';

import { IUseCase } from 'src/global';

import { UpdateTypePlagueDTO } from '../../infrastructure/dto/type-plague.entity';
import { TypePlagueRepository } from '../../infrastructure/repositories/type-plague-repository';

interface IInput {
  data: UpdateTypePlagueDTO;
  id: string;
}

@Injectable()
export class TypePlagueUpdatorUseCase implements IUseCase<IInput, void> {
  constructor(private typePlagueRepository: TypePlagueRepository) {}
  async execute({ data, id }: IInput): Promise<void> {
    const item = await this.typePlagueRepository.findOne({ id });

    if (!item) {
      throw new NotFoundException('No se encontro entidad TypePlague');
    }

    Object.assign(item, data);

    await this.typePlagueRepository.save(item);
  }
}
