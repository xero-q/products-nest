// src/products/products.controller.ts
import {
  Body,
  Controller,
  Delete,
  Get,
  HttpCode,
  Param,
  ParseIntPipe,
  Put,
  Post,
  Query,
} from '@nestjs/common';
import { ProductService } from './product.service';
import { Product } from 'src/entities/product.entity';
import { PhysicalProduct } from 'src/entities/physical-product.entity';
import { DigitalProduct } from 'src/entities/digital-product.entity';
import { CreateDigitalProductDto } from 'src/dtos/create-digital-product.dto';
import { CreatePhysicalProductDto } from 'src/dtos/create-physical-product.dto';
import { UpdateDigitalProductDto } from 'src/dtos/update-digital-product.dto';
import { UpdatePhysicalProductDto } from 'src/dtos/update-physical-product.dto';

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
  async getAllProducts(
    @Query('page') page = 1,
    @Query('pageSize') pageSize = 20,
    @Query('search') search = '',
  ): Promise<{ results: Product[]; total: number }> {
    return this.productService.findAllProducts(page, pageSize, search);
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
  async deleteProduct(@Param('id', ParseIntPipe) id: number): Promise<void> {
    await this.productService.deleteProductById(id);
  }

  @Put('digital/:id')
  async updateDigitalProduct(
    @Param('id', ParseIntPipe) id: number,
    @Body() data: UpdateDigitalProductDto,
  ): Promise<Product> {
    return this.productService.updateDigitalProduct(id, data);
  }

  @Put('physical/:id')
  async updatePhysicalProduct(
    @Param('id', ParseIntPipe) id: number,
    @Body() data: UpdatePhysicalProductDto,
  ): Promise<Product> {
    return this.productService.updatePhysicalProduct(id, data);
  }

  @Get(':id')
  async getProduct(@Param('id', ParseIntPipe) id: number): Promise<Product> {
    return this.productService.getProduct(id);
  }
}
