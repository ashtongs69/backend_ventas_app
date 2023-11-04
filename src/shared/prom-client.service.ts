import { Injectable, OnModuleInit } from '@nestjs/common';
import * as client from 'prom-client';

@Injectable()
export class PrometheusService implements OnModuleInit {
  onModuleInit(): void {
    const { collectDefaultMetrics } = client;

    const register = new client.Registry();
    collectDefaultMetrics({ register: register });
  }

  getMetrics(): Promise<string> {
    return client.register.metrics();
  }
}
