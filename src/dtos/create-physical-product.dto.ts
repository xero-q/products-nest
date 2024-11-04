import { IsPositive } from 'class-validator';
import { CreateProductDto } from './create-product.dto';

export class CreatePhysicalProductDto extends CreateProductDto {
  @IsPositive()
  shipwmenCost: number;
}
