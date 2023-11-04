import { Controller, Get, Res } from '@nestjs/common';
import { ApiTags } from '@nestjs/swagger';
import { Response } from 'express';

import { PrometheusService } from './shared/prom-client.service';

@ApiTags('Global')
@Controller('/')
export class AppController {
  constructor(private readonly prometheusService: PrometheusService) {}

  @Get('/health-check')
  healthCheck(): string {
    return 'ok';
  }

  @Get('/metrics')
  async getMetrics(@Res() res: Response): Promise<void> {
    const metrics = await this.prometheusService.getMetrics();
    res.send(metrics);
  }
}
