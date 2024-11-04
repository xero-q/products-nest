import { Module } from '@nestjs/common';
import { ProductService } from './product.service';
import { ProductController } from './product.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Product } from 'src/common/entities/product.entity';
import { PhysicalProduct } from 'src/common/entities/physical-product.entity';
import { DigitalProduct } from 'src/common/entities/digital-product.entity';

@Module({
  imports: [
    TypeOrmModule.forFeature([Product, PhysicalProduct, DigitalProduct]),
  ],
  providers: [ProductService],
  controllers: [ProductController],
  exports: [ProductService],
})
export class ProductModule {}
