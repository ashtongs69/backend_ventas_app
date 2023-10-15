import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';

import { ColorEntity } from '../../domain/entities/ColorEntity';
import { IColorRepository } from '../../domain/repositories/ColorRepository';
import { Color } from '../entities/Color.entity';

@Injectable()
export class ColorRepository implements IColorRepository {
  constructor(
    @InjectRepository(Color)
    private colorRepository: Repository<Color>,
  ) {}

  async findById(id: string): Promise<ColorEntity> {
    try {
      const item = await this.colorRepository.findOneByOrFail({ id });
      return new ColorEntity(item);
    } catch {
      return null;
    }
  }

  async getAll(): Promise<ColorEntity[]> {
    const colors = await this.colorRepository.find();
    return colors.map((i) => new ColorEntity(i));
  }
  async save(value: ColorEntity): Promise<ColorEntity> {
    const color = await this.colorRepository.save(value);
    return new ColorEntity(color);
  }
  async updateOne(
    id: string,
    value: Partial<Omit<ColorEntity, 'id'>>,
  ): Promise<void> {
    console.log(id);
    console.log(value);

    throw new Error('Method not implemented.');
  }
  async deleteOne(id: string): Promise<void> {
    console.log(id);

    throw new Error('Method not implemented.');
  }
}
