import { ApiProperty } from '@nestjs/swagger';
import { IsEnum, IsNotEmpty, IsString } from 'class-validator';

import { EStatusProductInventoryPhone } from '../../domain/entities/ProductInventoryPhoneEntity';
import { EStatusProductInventoryTechnical } from '../../domain/entities/ProductInventoryTechnicalEntity';

export class ChangeStatusProductInventoryTechnicalDTO {
  @IsString()
  @IsNotEmpty()
  @IsEnum(EStatusProductInventoryPhone)
  @ApiProperty({
    required: false,
    example: EStatusProductInventoryTechnical.DAMAGED,
    enum: EStatusProductInventoryPhone,
  })
  status?: EStatusProductInventoryTechnical;
}
