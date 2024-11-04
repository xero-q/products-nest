// src/products/products.controller.ts
import { Controller, Get } from '@nestjs/common';
import { ProductService } from './product.service';
import { Product } from 'src/common/entities/product.entity';
import { PhysicalProduct } from 'src/common/entities/physical-product.entity';
import { DigitalProduct } from 'src/common/entities/digital-product.entity';

@Controller('product')
export class ProductController {
  constructor(private readonly productService: ProductService) {}

  @Get('physical')
  async getPhysicalProducts(): Promise<PhysicalProduct[]> {
    return this.productService.findAllPhysicalProducts();
  }

  @Get('digital')
  async getDigitalProducts(): Promise<DigitalProduct[]> {
    return this.productService.findAllDigitalProducts();
  }

  @Get('all')
  async getAllProducts(): Promise<Product[]> {
    return this.productService.findAllProducts();
  }
}
