import { ApiProperty } from '@nestjs/swagger';
import { IsNotEmpty, IsNumberString } from 'class-validator';

export class CreateStorageDto {
  @IsNumberString()
  @IsNotEmpty()
  @ApiProperty({
    required: true,
    example: '1',
  })
  quantity: number;
}
