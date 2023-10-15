import { ApiProperty } from '@nestjs/swagger';
import { IsNotEmpty, IsString } from 'class-validator';

export class CreateColorDto {
  @IsString()
  @IsNotEmpty()
  @ApiProperty({
    required: true,
    example: 'Rojo',
  })
  name: string;
}
