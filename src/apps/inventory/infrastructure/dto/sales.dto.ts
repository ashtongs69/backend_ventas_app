import { ApiProperty } from '@nestjs/swagger';
import { IsNotEmpty, IsNumber, IsString } from 'class-validator';

export class CreateSalesDto {
  @IsNotEmpty()
  @IsString({ each: true })
  @ApiProperty({
    required: true,
    example: 'Rojo',
  })
  products: string[];

  @IsNotEmpty()
  @IsString()
  @ApiProperty({
    required: true,
    example: '1234567890',
  })
  user: string;

  @IsNotEmpty()
  @IsString()
  @ApiProperty({
    required: true,
    example: '1234567890',
  })
  customer: string;

  @IsNotEmpty()
  @IsNumber()
  @ApiProperty({
    required: true,
    example: 11,
  })
  total: number;
}
