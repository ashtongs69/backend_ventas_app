import { registerAs } from '@nestjs/config';
import * as dotenv from 'dotenv';
import * as Joi from 'joi';
import { DataSource } from 'typeorm';

dotenv.config();

export enum EEnv {
  PRODUCTION = 'prod',
  DEVELOPMENT = 'dev',
}

export interface IEnvConfig {
  PORT: number;
  TYPEORM_CONNECTION: string;
  TYPEORM_HOST: string;
  TYPEORM_PORT: string;
  TYPEORM_USERNAME: string;
  TYPEORM_PASSWORD: string;
  TYPEORM_DATABASE: string;
  TYPEORM_ENTITIES: string;
  TYPEORM_MIGRATIONS: string;
  TYPEORM_LOGGING: string;
  SECRET_WORD: string;
  EXPIRATION_TIME_ACCESS_TOKEN: string;
  EXPIRATION_TIME_REFRESH_TOKEN: string;
  FRONTEND_URL: string;
  SENDGRID_API_KEY: string;
  RABBIT_MQ_URI: string;
  TZ: string;
  CORS: string;
}

export const joiSchemaEnv = Joi.object<IEnvConfig>({
  PORT: Joi.number().min(3000).max(5000).required(),
  TYPEORM_CONNECTION: Joi.string().required(),
  TYPEORM_HOST: Joi.string().required(),
  TYPEORM_PORT: Joi.string().required(),
  TYPEORM_USERNAME: Joi.string().required(),
  TYPEORM_PASSWORD: Joi.string().required(),
  TYPEORM_DATABASE: Joi.string().required(),
  TYPEORM_ENTITIES: Joi.string().required(),
  TYPEORM_MIGRATIONS: Joi.string().required(),
  TYPEORM_LOGGING: Joi.string().required(),
  SECRET_WORD: Joi.string().required(),
  EXPIRATION_TIME_ACCESS_TOKEN: Joi.string().required(),
  EXPIRATION_TIME_REFRESH_TOKEN: Joi.string().required(),
  FRONTEND_URL: Joi.string().required(),
  SENDGRID_API_KEY: Joi.string().required(),
  RABBIT_MQ_URI: Joi.string().uri().required(),
  TZ: Joi.string().required(),
  CORS: Joi.string().required(),
});

export const config = registerAs('config', () => {
  return {
    TYPEORM_CONNECTION: process.env.TYPEORM_CONNECTION,
    TYPEORM_HOST: process.env.TYPEORM_HOST,
    TYPEORM_PORT: process.env.TYPEORM_PORT,
    TYPEORM_USERNAME: process.env.TYPEORM_USERNAME,
    TYPEORM_PASSWORD: process.env.TYPEORM_PASSWORD,
    TYPEORM_DATABASE: process.env.TYPEORM_DATABASE,
    TYPEORM_ENTITIES: process.env.TYPEORM_ENTITIES,
    TYPEORM_MIGRATIONS: process.env.TYPEORM_MIGRATIONS,
    TYPEORM_LOGGING: process.env.TYPEORM_LOGGING,
    PORT: parseInt(process.env.PORT),
    SECRET_WORD: process.env.SECRET_WORD,
    EXPIRATION_TIME_ACCESS_TOKEN: process.env.EXPIRATION_TIME_ACCESS_TOKEN,
    EXPIRATION_TIME_REFRESH_TOKEN: process.env.EXPIRATION_TIME_REFRESH_TOKEN,
    FRONTEND_URL: process.env.FRONTEND_URL,
    SENDGRID_API_KEY: process.env.SENDGRID_API_KEY,
    RABBIT_MQ_URI: process.env.RABBIT_MQ_URI,
    TZ: process.env.TZ,
    CORS: process.env.CORS,
  };
});

export const datasource = new DataSource({
  type: 'postgres',
  host: `${process.env.TYPEORM_HOST}`,
  port: Number(process.env.TYPEORM_PORT),
  username: `${process.env.TYPEORM_USERNAME}`,
  password: `${process.env.TYPEORM_PASSWORD}`,
  database: `${process.env.TYPEORM_DATABASE}`,
  entities: [__dirname + `${process.env.TYPEORM_ENTITIES}`],
  migrations: [__dirname + `${process.env.TYPEORM_MIGRATIONS}`],
  synchronize: false,
});
