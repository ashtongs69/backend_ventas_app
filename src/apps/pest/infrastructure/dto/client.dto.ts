import { ApiProperty, PartialType } from '@nestjs/swagger';
import { IsNotEmpty, IsNumberString, IsString } from 'class-validator';

export class CreateClientDTO {
  @IsString()
  @IsNotEmpty()
  @ApiProperty({
    required: true,
    example: 'Alexander Serrano',
  })
  name: string;

  @IsString()
  @IsNotEmpty()
  @ApiProperty({
    required: true,
    example: 'Ramirez #416 Zona centro',
  })
  address: string;

  @IsNumberString()
  @IsNotEmpty()
  @ApiProperty({
    required: true,
    example: 'Alexander Serrano',
  })
  phone: string;
}

export class UpdateClientDTO extends PartialType(CreateClientDTO) {}
