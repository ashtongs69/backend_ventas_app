import { ApiProperty, PartialType } from '@nestjs/swagger';
import {
  IsArray,
  IsEnum,
  IsNotEmpty,
  IsNumber,
  IsOptional,
  IsString,
} from 'class-validator';

import {
  EPhoneStatus,
  EStatusProductInventoryPhone,
  ETypeUnlock,
} from '../../domain/entities/ProductInventoryPhoneEntity';

export class CreateProductInventoryPhoneDTO {
  @IsString()
  @IsNotEmpty()
  @ApiProperty({
    required: true,
    example: 'id',
  })
  imei: string;

  @IsString()
  @IsNotEmpty()
  @ApiProperty({
    required: true,
    example: 'id',
  })
  model: string;

  @IsString()
  @IsNotEmpty()
  @ApiProperty({
    required: true,
    example: 'id',
  })
  color: string;

  @IsString()
  @IsNotEmpty()
  @ApiProperty({
    required: true,
    example: 'id',
  })
  storage: string;

  @IsString()
  @IsNotEmpty()
  @ApiProperty({
    required: true,
    example: 'id',
  })
  provider: string;

  @IsString()
  @IsNotEmpty()
  @ApiProperty({
    required: true,
    example: 'id',
  })
  store: string;

  @IsNumber()
  @IsOptional()
  @ApiProperty({
    required: true,
    example: '1',
  })
  price?: number;

  @IsNumber()
  @IsOptional()
  @ApiProperty({
    required: true,
    example: '1',
  })
  priceChange?: number;

  @IsString()
  @IsOptional()
  @IsEnum(EPhoneStatus)
  @ApiProperty({
    required: true,
    example: EPhoneStatus['SEMI-NEW'],
  })
  phoneStatus?: EPhoneStatus;

  @IsString()
  @IsOptional()
  @IsEnum(ETypeUnlock)
  @ApiProperty({
    required: true,
    example: ETypeUnlock.UNLOCK,
  })
  typeUnlock?: ETypeUnlock;

  @IsNumber()
  @IsOptional()
  @ApiProperty({
    required: true,
    example: '1',
  })
  interestThreshold?: number;

  @IsNumber()
  @IsOptional()
  @ApiProperty({
    required: true,
    example: '1',
  })
  batteryPercentage?: number;

  @IsArray()
  @IsString({ each: true })
  @ApiProperty({
    example: ['1'],
  })
  typeDamage?: string[];
}

export class ChangeStatusProductInventoryPhoneDTO {
  @IsString()
  @IsNotEmpty()
  @IsEnum(EStatusProductInventoryPhone)
  @ApiProperty({
    required: false,
    example: EStatusProductInventoryPhone.SOLD,
    enum: EStatusProductInventoryPhone,
  })
  status?: EStatusProductInventoryPhone;
}

export class FindByNameProductInventoryPhoneDTO {
  @IsString()
  @IsNotEmpty()
  @ApiProperty({
    required: false,
    example: 'name',
  })
  name: string;
}

export class UpdateProductInventoryPhoneDTO extends PartialType(
  CreateProductInventoryPhoneDTO,
) {}

export class QueryProductInventoryPhoneDTO {
  @IsString()
  @IsNotEmpty()
  @ApiProperty({
    required: false,
    example: 'id',
  })
  imei?: string;

  @IsString()
  @IsNotEmpty()
  @IsEnum(EStatusProductInventoryPhone)
  @ApiProperty({
    required: false,
    example: EStatusProductInventoryPhone.SOLD,
    enum: EStatusProductInventoryPhone,
  })
  status?: EStatusProductInventoryPhone;

  @IsString()
  @IsNotEmpty()
  @ApiProperty({
    required: false,
    example: 'id',
  })
  model?: string;

  @IsString()
  @IsNotEmpty()
  @ApiProperty({
    required: false,
    example: 'id',
  })
  color?: string;

  @IsString()
  @IsNotEmpty()
  @ApiProperty({
    required: false,
    example: 'id',
  })
  storage?: string;

  @IsString()
  @IsNotEmpty()
  @ApiProperty({
    required: false,
    example: 'id',
  })
  provider?: string;
}
