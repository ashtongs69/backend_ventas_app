import { Controller, Get } from '@nestjs/common';
import { ApiTags } from '@nestjs/swagger';

@Controller('/health-check')
@ApiTags('Health Check')
export class HealthCheckController {
  @Get('/')
  validate(): any {
    return { message: 'ok' };
  }
}
