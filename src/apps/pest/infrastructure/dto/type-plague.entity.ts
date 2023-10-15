import { ApiProperty, PartialType } from '@nestjs/swagger';
import { IsString } from 'class-validator';

export class CreateTypePlagueDTO {
  @IsString()
  @ApiProperty({
    required: true,
    example: 'A veces',
  })
  name: string;
}

export class UpdateTypePlagueDTO extends PartialType(CreateTypePlagueDTO) {}
