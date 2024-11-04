// src/products/products.controller.ts
import {
  Body,
  Controller,
  Delete,
  Get,
  HttpCode,
  Param,
  Post,
} from '@nestjs/common';
import { ProductService } from './product.service';
import { Product } from 'src/entities/product.entity';
import { PhysicalProduct } from 'src/entities/physical-product.entity';
import { DigitalProduct } from 'src/entities/digital-product.entity';
import { CreateDigitalProductDto } from 'src/dtos/create-digital-product.dto';
import { CreatePhysicalProductDto } from 'src/dtos/create-physical-product.dto';

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

  @Post('digital')
  async createDigitalProduct(
    @Body() data: CreateDigitalProductDto,
  ): Promise<DigitalProduct> {
    return this.productService.createDigitalProduct(data);
  }

  @Post('physical')
  async createPhysicalProduct(
    @Body() data: CreatePhysicalProductDto,
  ): Promise<PhysicalProduct> {
    return this.productService.createPhysicalProduct(data);
  }

  @Delete(':id')
  @HttpCode(204)
  async deleteProduct(@Param('id') id: number): Promise<void> {
    await this.productService.deleteProductById(id);
  }
}
