import { ReportDamageEntity } from '../entities/ReportDamageEntity';

// eslint-disable-next-line @typescript-eslint/naming-convention
export interface IReportDamageRepository {
  save(data: ReportDamageEntity): Promise<ReportDamageEntity | null>;
}
