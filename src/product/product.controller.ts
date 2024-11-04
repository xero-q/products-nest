// src/products/products.controller.ts
import { Controller, Get } from '@nestjs/common';
import { PhysicalProduct } from './physical/physical-product.entity';
import { DigitalProduct } from './digital/digital-product.entity';
import { ProductService } from './product.service';
import { Product } from 'src/common/entities/product.entity';

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
