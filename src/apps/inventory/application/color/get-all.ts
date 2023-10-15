import { Injectable } from '@nestjs/common';

import { IUseCase } from 'src/global';

import { ColorEntity } from '../../domain/entities/ColorEntity';
import { ColorRepository } from '../../infrastructure/repository/Color.repository';

@Injectable()
export class ColorGetAllUseCase implements IUseCase<never, ColorEntity[]> {
  constructor(private colorModelRepository: ColorRepository) {}
  async execute(): Promise<ColorEntity[]> {
    return this.colorModelRepository.getAll();
  }
}
