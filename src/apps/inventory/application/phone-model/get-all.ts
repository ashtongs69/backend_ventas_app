import { Injectable } from '@nestjs/common';

import { IUseCase } from 'src/global';

import { PhoneModelEntity } from '../../domain/entities/PhoneModelEntity';
import { PhoneModelRepository } from '../../infrastructure/repository/PhoneModel.repository';

@Injectable()
export class PhoneModelGetAllUseCase
  implements IUseCase<never, PhoneModelEntity[]>
{
  constructor(private phoneModelRepository: PhoneModelRepository) {}
  async execute(): Promise<PhoneModelEntity[]> {
    return this.phoneModelRepository.getAll();
  }
}
