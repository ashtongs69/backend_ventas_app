import { ApiProperty, PartialType } from '@nestjs/swagger';
import {
  IsArray,
  IsBoolean,
  IsDateString,
  IsEnum,
  IsNotEmpty,
  IsNumberString,
  IsOptional,
  IsString,
} from 'class-validator';

import { generateUUID } from 'src/shared/utils/generateUUID';

import {
  EStatusPlague,
  ETypePlague,
} from '../../domain/entities/plague-entity';

export class CreatePlagueDTO {
  @IsDateString()
  @IsNotEmpty()
  @ApiProperty({
    required: true,
    example: new Date(),
  })
  date: Date;

  @IsNumberString()
  @IsNotEmpty()
  @ApiProperty({
    required: true,
    example: '700',
  })
  cost: number;

  @IsString()
  @IsOptional()
  @ApiProperty({
    required: true,
    example: '700',
  })
  observations: string;

  @IsEnum(ETypePlague)
  @ApiProperty({
    required: true,
    example: ETypePlague.INITIAL,
    enum: ETypePlague,
  })
  type: ETypePlague;

  @IsString()
  @IsNotEmpty()
  @ApiProperty({
    required: true,
    example: generateUUID(),
  })
  client: string;

  @IsArray()
  @IsString({ each: true })
  @IsNotEmpty()
  @ApiProperty({
    required: true,
    example: [generateUUID()],
  })
  typePlague: string[];

  @IsArray()
  @IsString({ each: true })
  @IsNotEmpty()
  @ApiProperty({
    required: true,
    example: [generateUUID()],
  })
  typeService: string[];

  @IsArray()
  @IsString({ each: true })
  @IsNotEmpty()
  @ApiProperty({
    required: true,
    example: [generateUUID()],
  })
  frecuency: string[];

  @IsArray()
  @IsString({ each: true })
  @IsNotEmpty()
  @ApiProperty({
    required: true,
    example: [generateUUID()],
  })
  recomendations: string[];

  @IsBoolean()
  @IsOptional()
  shouldFollowUp?: boolean;

  @IsNumberString()
  @IsOptional()
  daysFollowUp?: number;

  @IsDateString()
  @IsOptional()
  dateFollowUp?: Date;
}

export class CreateFollowUpDTO {
  @IsString()
  @IsNotEmpty()
  @ApiProperty({
    required: true,
    example: '1223456789',
  })
  id: string;

  @IsString()
  @IsNotEmpty()
  @ApiProperty({
    required: true,
    example: 'Observaciones ....',
  })
  observations: string;

  @IsDateString()
  @IsNotEmpty()
  @ApiProperty({
    required: true,
    example: new Date(),
  })
  date: Date;
}

export class UpdatePlagueDTO extends PartialType(CreatePlagueDTO) {
  @IsEnum(EStatusPlague)
  @IsOptional()
  @ApiProperty({
    required: false,
    example: EStatusPlague.NO_REALIZED,
    enum: EStatusPlague,
  })
  status?: EStatusPlague;
}
