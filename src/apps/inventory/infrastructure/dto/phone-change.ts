import { ApiProperty } from '@nestjs/swagger';
import { Type } from 'class-transformer';
import {
  IsDefined,
  IsNotEmpty,
  IsNotEmptyObject,
  IsNumberString,
  IsObject,
  IsString,
  ValidateNested,
} from 'class-validator';

import { generateUUID } from 'src/shared/utils/generateUUID';

class ProductGiven {
  @IsString()
  @IsNotEmpty()
  @ApiProperty({
    required: true,
    example: generateUUID(),
  })
  imei: string;

  @IsString()
  @IsNotEmpty()
  @ApiProperty({
    required: true,
    example: generateUUID(),
  })
  model: string;

  @IsString()
  @IsNotEmpty()
  @ApiProperty({
    required: true,
    example: generateUUID(),
  })
  color: string;

  @IsString()
  @IsNotEmpty()
  @ApiProperty({
    required: true,
    example: generateUUID(),
  })
  storage: string;

  @IsString({ each: true })
  @IsNotEmpty()
  @ApiProperty({
    required: true,
    example: [generateUUID()],
    isArray: true,
  })
  typeDamage: string[];
}
export class CreatePhoneChangeDto {
  @IsNumberString()
  @IsNotEmpty()
  @ApiProperty({
    required: true,
    example: '130',
  })
  money: number;

  @IsString()
  @IsNotEmpty()
  @ApiProperty({
    required: true,
    example: generateUUID(),
  })
  productGived: string;

  @IsDefined()
  @IsNotEmptyObject()
  @IsObject()
  @ValidateNested()
  @Type(() => ProductGiven)
  @ApiProperty({
    required: true,
    example: {
      imei: 'imei',
      model: 'imei',
      color: 'imei',
      storage: 'imei',
      typeDamage: ['imei'],
    },
  })
  productReceived: ProductGiven;

  @IsString()
  @IsNotEmpty()
  @ApiProperty({
    required: true,
    example: generateUUID(),
  })
  customer: string;
}
