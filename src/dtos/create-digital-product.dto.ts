import { IsNotEmpty, IsString } from 'class-validator';
import { CreateProductDto } from './create-product.dto';

export class CreateDigitalProductDto extends CreateProductDto {
  @IsString()
  @IsNotEmpty()
  downloadLink: string;
}
