import { Injectable } from '@nestjs/common';

import { IUseCase } from 'src/global';

import { SalesEntity } from '../../domain/entities/SalesEntity';
import { SalesRepository } from '../../infrastructure/repository/Sales.repository';

@Injectable()
export class SalesGetAllUseCase implements IUseCase<never, SalesEntity[]> {
  constructor(private salesRepository: SalesRepository) {}
  async execute(): Promise<SalesEntity[]> {
    return this.salesRepository.getAll();
  }
}
