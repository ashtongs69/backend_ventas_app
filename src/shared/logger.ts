import winston from 'winston';
import 'winston-loki';

export const logger = winston.createLogger({
  level: 'info',
  format: winston.format.json(),
  defaultMeta: { service: 'your-service-name' },
  transports: [
    new winston.transports.Console(),
    new winston.transports.Loki({
      host: 'http://loki:3100',
    }),
  ],
});
