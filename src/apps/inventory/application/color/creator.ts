import { Injectable } from '@nestjs/common';

import { IUseCase } from 'src/global';
import { generateUUID } from 'src/shared/utils/generateUUID';

import { ColorEntity } from '../../domain/entities/ColorEntity';
import { CreateColorDto } from '../../infrastructure/dto/color.dto';
import { ColorRepository } from '../../infrastructure/repository/Color.repository';

@Injectable()
export class ColorCreatorUseCase
  implements IUseCase<CreateColorDto, ColorEntity>
{
  constructor(private colorModelRepository: ColorRepository) {}
  async execute(data: CreateColorDto): Promise<ColorEntity> {
    const newColorEntity = new ColorEntity({
      id: generateUUID(),
      ...data,
    });

    const newColor = await this.colorModelRepository.save(newColorEntity);
    return newColor;
  }
}
