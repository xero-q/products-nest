import { Module } from '@nestjs/common';
import { PhysicalProductModule } from './physical/physical-product.module';
import { DigitalProductModule } from './digital/digital-product.module';
import { ProductService } from './product.service';
import { ProductController } from './product.controller';


@Module({
  imports: [PhysicalProductModule, DigitalProductModule],
  providers: [ProductService],
  controllers: [ProductController],
})
export class ProductModule {}
