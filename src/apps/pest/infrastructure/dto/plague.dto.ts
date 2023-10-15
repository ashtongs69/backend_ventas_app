import { ApiProperty, PartialType } from '@nestjs/swagger';
import {
  IsArray,
  IsBoolean,
  IsDateString,
  IsNotEmpty,
  IsNumberString,
  IsOptional,
  IsString,
} from 'class-validator';

import { generateUUID } from 'src/shared/utils/generateUUID';

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
  @IsNotEmpty()
  @ApiProperty({
    required: true,
    example: '700',
  })
  observations: string;

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

export class UpdatePlagueDTO extends PartialType(CreatePlagueDTO) {}
