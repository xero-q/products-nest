import { IsOptional, IsPositive } from 'class-validator';
import { UpdateProductDto } from './update-product.dto';

export class UpdatePhysicalProductDto extends UpdateProductDto {
  @IsOptional()
  @IsPositive()
  shipwmenCost: number;
}
