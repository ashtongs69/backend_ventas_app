import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { JwtModule } from '@nestjs/jwt';
import { TypeOrmModule } from '@nestjs/typeorm';

import { AppController } from './app.controller';
import { PestModule } from './apps/pest/pest.module';
import { UserModule } from './apps/user/user.module';
import { IEnvConfig, config, joiSchemaEnv } from './config';
import { PrometheusService } from './shared/prom-client.service';

@Module({
  imports: [
    ConfigModule.forRoot({
      isGlobal: true,
      load: [config],
      validationSchema: joiSchemaEnv,
    }),
    {
      ...JwtModule.registerAsync({
        inject: [config.KEY],
        useFactory: async (env: IEnvConfig) => {
          return {
            secret: env.SECRET_WORD,
          };
        },
      }),
      global: true,
    },
    TypeOrmModule.forRootAsync({
      inject: [config.KEY],
      useFactory: async (config: IEnvConfig) => {
        return {
          type: 'postgres',
          host: `${config.TYPEORM_HOST}`,
          port: Number(config.TYPEORM_PORT),
          username: `${config.TYPEORM_USERNAME}`,
          password: `${config.TYPEORM_PASSWORD}`,
          database: `${config.TYPEORM_DATABASE}`,
          entities: ['dist/**/*.entity{.ts,.js}'],
          migrations: ['dist/migrations/*{.ts,.js}'],
          synchronize: false,
          autoLoadEntities: true,
        };
      },
    }),
    UserModule,
    PestModule,
  ],
  providers: [PrometheusService],
  exports: [JwtModule],
  controllers: [AppController],
})
export class AppModule {}
