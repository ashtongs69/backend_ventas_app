import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';

import { ClientCreatorUseCase } from './application/client/creator';
import { ClientFinderAllUseCase } from './application/client/finder-all';
import { ClientUpdatorUseCase } from './application/client/updator';
import { FrecuencyCreatorUseCase } from './application/frecuency/creator';
import { FrecuencyFinderAllUseCase } from './application/frecuency/finder-all';
import { FrecuencyUpdatorUseCase } from './application/frecuency/updator';
import { PlagueCreatorUseCase } from './application/plague/creator';
import { PlagueCreatorFollowUpUseCase } from './application/plague/creator-followup';
import { PlagueFinderAllUseCase } from './application/plague/finder-all';
import { PlagueUpdatorUseCase } from './application/plague/updator';
import { RecomendationsCreatorUseCase } from './application/recomendations/creator';
import { RecomendationsFinderAllUseCase } from './application/recomendations/finder-all';
import { RecomendationsUpdatorUseCase } from './application/recomendations/updator';
import { TypePlagueCreatorUseCase } from './application/type-plague/creator';
import { TypePlagueFinderAllUseCase } from './application/type-plague/finder-all';
import { TypePlagueUpdatorUseCase } from './application/type-plague/updator';
import { TypeServiceCreatorUseCase } from './application/type-service/creator';
import { TypeServiceFinderAllUseCase } from './application/type-service/finder-all';
import { TypeServiceUpdatorUseCase } from './application/type-service/updator';
import { ClientController } from './infrastructure/controller/client.controller';
import { FrecuencyController } from './infrastructure/controller/frecuency.controller';
import { PlagueController } from './infrastructure/controller/plague.controller';
import { RecomendationsController } from './infrastructure/controller/recomendations.controller';
import { TypePlagueController } from './infrastructure/controller/type-plague.controller';
import { TypeServiceController } from './infrastructure/controller/type-service.controller';
import { Client } from './infrastructure/models/client.entity';
import { Frecuency } from './infrastructure/models/frecuency.entity';
import { Plague } from './infrastructure/models/plague.entity';
import { Recomendations } from './infrastructure/models/recomendations.entity';
import { TypePlague } from './infrastructure/models/type-plague.entity';
import { TypeService } from './infrastructure/models/type-service.entity';
import { ClientRepository } from './infrastructure/repositories/client-repository';
import { FrecuencyRepository } from './infrastructure/repositories/frecuency-repository';
import { PlagueRepository } from './infrastructure/repositories/plague-repository';
import { RecomendationsRepository } from './infrastructure/repositories/recomendations-repository';
import { TypePlagueRepository } from './infrastructure/repositories/type-plague-repository';
import { TypeServiceRepository } from './infrastructure/repositories/type-service-repository';

@Module({
  imports: [
    TypeOrmModule.forFeature([
      Client,
      Frecuency,
      Recomendations,
      Plague,
      TypePlague,
      TypeService,
    ]),
  ],
  controllers: [
    ClientController,
    FrecuencyController,
    RecomendationsController,
    TypePlagueController,
    TypeServiceController,
    PlagueController,
  ],
  providers: [
    //UTILS

    //Use Case
    ClientCreatorUseCase,
    ClientFinderAllUseCase,
    ClientUpdatorUseCase,
    FrecuencyCreatorUseCase,
    FrecuencyFinderAllUseCase,
    FrecuencyUpdatorUseCase,
    RecomendationsCreatorUseCase,
    RecomendationsFinderAllUseCase,
    RecomendationsUpdatorUseCase,
    TypePlagueCreatorUseCase,
    TypePlagueFinderAllUseCase,
    TypePlagueUpdatorUseCase,
    TypeServiceCreatorUseCase,
    TypeServiceFinderAllUseCase,
    TypeServiceUpdatorUseCase,
    PlagueCreatorUseCase,
    PlagueFinderAllUseCase,
    PlagueUpdatorUseCase,
    PlagueCreatorFollowUpUseCase,

    //Repositories
    ClientRepository,
    FrecuencyRepository,
    RecomendationsRepository,
    TypePlagueRepository,
    TypeServiceRepository,
    PlagueRepository,

    /* EncryptService,
    AuthGuard,
    PermmissionGuard, */
  ],
  exports: [],
})
export class PestModule {}
