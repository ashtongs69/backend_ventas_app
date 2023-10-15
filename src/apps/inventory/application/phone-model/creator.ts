import { Injectable } from '@nestjs/common';

import { IUseCase } from 'src/global';
import { generateUUID } from 'src/shared/utils/generateUUID';

import { PhoneModelEntity } from '../../domain/entities/PhoneModelEntity';
import { CreatePhoneModelDto } from '../../infrastructure/dto/phone-model.dto';
import { PhoneModelRepository } from '../../infrastructure/repository/PhoneModel.repository';

@Injectable()
export class PhoneModelCreatorUseCase
  implements IUseCase<CreatePhoneModelDto, PhoneModelEntity>
{
  constructor(private phoneModelRepository: PhoneModelRepository) {}
  async execute(data: CreatePhoneModelDto): Promise<PhoneModelEntity> {
    const entity = new PhoneModelEntity({
      id: generateUUID(),
      ...data,
    });
    return await this.phoneModelRepository.save(entity);
  }
}
