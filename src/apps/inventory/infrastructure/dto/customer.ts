import { ApiProperty } from '@nestjs/swagger';
import { IsNotEmpty, IsNumberString, IsString } from 'class-validator';

import { generateUUID } from 'src/shared/utils/generateUUID';

export class CreateCustomerDTO {
  @IsString()
  @IsNotEmpty()
  @ApiProperty({
    required: true,
    example: generateUUID(),
  })
  name: string;

  @IsNumberString()
  @IsNotEmpty()
  @ApiProperty({
    required: true,
    example: '123432432',
  })
  phoneNumber: string;

  @IsString()
  @IsNotEmpty()
  @ApiProperty({
    required: true,
    example: 'Ramirez 416',
  })
  address: string;
}
