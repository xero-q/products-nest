import { Module } from '@nestjs/common';
import { PhysicalProductModule } from './physical/physical-product.module';
import { DigitalProductModule } from './digital/digital-product.module';
import { ProductService } from './product.service';
import { ProductController } from './product.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Product } from 'src/common/entities/product.entity';
import { PhysicalProduct } from './physical/physical-product.entity';
import { DigitalProduct } from './digital/digital-product.entity';

@Module({
  imports: [
    TypeOrmModule.forFeature([Product, PhysicalProduct, DigitalProduct]),
    PhysicalProductModule,
    DigitalProductModule,
  ],
  providers: [ProductService],
  controllers: [ProductController],
  exports: [ProductService],
})
export class ProductModule {}
