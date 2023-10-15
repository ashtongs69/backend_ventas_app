import { ApiProperty, PartialType } from '@nestjs/swagger';
import { IsNumberString, IsString } from 'class-validator';

export class CreateTypeServiceDTO {
  @IsString()
  @ApiProperty({
    required: true,
    example: 'A veces',
  })
  name: string;

  @IsNumberString()
  @ApiProperty({
    required: true,
    example: '100.0',
  })
  price: number;
}

export class UpdateTypeServiceDTO extends PartialType(CreateTypeServiceDTO) {}
