import { Injectable, OnModuleInit } from '@nestjs/common';
import { Registry, collectDefaultMetrics } from 'prom-client';

@Injectable()
export class PrometheusService implements OnModuleInit {
  private registry: Registry;

  onModuleInit(): void {
    const registry = new Registry();
    this.registry = registry;
    collectDefaultMetrics({ register: registry });
  }

  getMetrics(): Promise<string> {
    return this.registry.metrics();
  }
}
