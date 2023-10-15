import { ApiProperty } from '@nestjs/swagger';
import { IsEnum, IsNotEmpty, IsString } from 'class-validator';

import { ProviderType } from '../../domain/entities/ProviderEntity';

export class CreateProviderDto {
  @IsString()
  @IsNotEmpty()
  @ApiProperty({
    required: true,
    example: 'Rojo',
  })
  name: string;

  @IsString()
  @IsNotEmpty()
  @ApiProperty({
    required: true,
    example: 'Rojo',
  })
  @IsEnum(['person', 'company'])
  type: ProviderType;
}
