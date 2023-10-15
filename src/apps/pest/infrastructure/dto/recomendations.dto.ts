import { ApiProperty, PartialType } from '@nestjs/swagger';
import { IsString } from 'class-validator';

export class CreateRecomendationsDTO {
  @IsString()
  @ApiProperty({
    required: true,
    example: 'A veces',
  })
  name: string;
}

export class UpdateRecomendationsDTO extends PartialType(
  CreateRecomendationsDTO,
) {}
