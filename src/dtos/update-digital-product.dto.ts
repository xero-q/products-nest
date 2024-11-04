import { IsOptional, IsString } from 'class-validator';
import { UpdateProductDto } from './update-product.dto';

export class UpdateDigitalProductDto extends UpdateProductDto {
  @IsOptional()
  @IsString()
  downloadLink: string;
}
