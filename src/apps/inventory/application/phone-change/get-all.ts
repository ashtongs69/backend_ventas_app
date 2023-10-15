import { Injectable } from '@nestjs/common';

import { IUseCase } from 'src/global';

import { PhoneChangeEntity } from '../../domain/entities/PhoneChangeEntity';
import { PhoneChangeRepository } from '../../infrastructure/repository/PhoneChange.repository';

@Injectable()
export class PhoneChangeGetAllUseCase
  implements IUseCase<never, PhoneChangeEntity[]>
{
  constructor(private phoneChangeRepository: PhoneChangeRepository) {}
  async execute(): Promise<PhoneChangeEntity[]> {
    return this.phoneChangeRepository.find({});
  }
}
