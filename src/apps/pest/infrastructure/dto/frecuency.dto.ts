import { ApiProperty, PartialType } from '@nestjs/swagger';
import { IsString } from 'class-validator';

export class CreateFrecuencyDTO {
  @IsString()
  @ApiProperty({
    required: true,
    example: 'A veces',
  })
  name: string;
}

export class UpdateFrecuencyDTO extends PartialType(CreateFrecuencyDTO) {}
