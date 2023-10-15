import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';

import { ReportDamageEntity } from '../../domain/entities/ReportDamageEntity';
import { IReportDamageRepository } from '../../domain/repositories/ReportDamageRepository';
import { ReportDamage } from '../entities/ReportDamage.entity';

@Injectable()
export class ReportDamageRepository implements IReportDamageRepository {
  constructor(
    @InjectRepository(ReportDamage)
    private reportDamageRepository: Repository<ReportDamage>,
  ) {}
  async save(data: ReportDamageEntity): Promise<ReportDamageEntity> {
    const item = await this.reportDamageRepository.save(data);
    return new ReportDamageEntity({ ...item });
  }
}
