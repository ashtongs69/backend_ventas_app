import { ClientEntity } from './client-entity';
import { FrecuencyEntity } from './frecuency-entity';
import { RecomendationsEntity } from './recomendations-entity';
import { TypePlagueEntity } from './type-plague-entity';
import { TypeServiceEntity } from './type-service-entity';

export class PlagueEntity {
  id: string;
  date: Date;
  client: ClientEntity;
  cost: number;
  observations: string;
  typePlague: TypePlagueEntity[];
  typeService: TypeServiceEntity[];
  frecuency: FrecuencyEntity[];
  recomendations: RecomendationsEntity[];
  shouldFollowUp?: boolean;
  daysFollowUp?: number;
  dateFollowUp?: Date;

  constructor(data: {
    id: string;
    date: Date;
    cost: number;
    observations: string;
    client: ClientEntity;
    typePlague: TypePlagueEntity[];
    typeService: TypeServiceEntity[];
    frecuency: FrecuencyEntity[];
    recomendations: RecomendationsEntity[];
    shouldFollowUp?: boolean;
    daysFollowUp?: number;
    dateFollowUp?: Date;
  }) {
    this.id = data.id;
    this.date = data.date;
    this.client = data.client;
    this.cost = data.cost;
    this.observations = data.observations;
    this.typePlague = data.typePlague;
    this.typeService = data.typeService;
    this.frecuency = data.frecuency;
    this.recomendations = data.recomendations;
    this.shouldFollowUp = data.shouldFollowUp;
    this.daysFollowUp = data.daysFollowUp;
    this.dateFollowUp = data.dateFollowUp;
  }
}
