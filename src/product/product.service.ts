import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Product } from 'src/entities/product.entity';
import { PhysicalProduct } from 'src/entities/physical-product.entity';
import { DigitalProduct } from 'src/entities/digital-product.entity';
import { CreateDigitalProductDto } from 'src/dtos/create-digital-product.dto';
import { CreatePhysicalProductDto } from 'src/dtos/create-physical-product.dto';

@Injectable()
export class ProductService {
  constructor(
    @InjectRepository(Product)
    private productRepository: Repository<Product>,

    @InjectRepository(PhysicalProduct)
    private physicalProductRepository: Repository<PhysicalProduct>,

    @InjectRepository(DigitalProduct)
    private digitalProductRepository: Repository<DigitalProduct>,
  ) {}

  async findAllPhysicalProducts(): Promise<PhysicalProduct[]> {
    return this.physicalProductRepository.find();
  }

  async findAllDigitalProducts(): Promise<DigitalProduct[]> {
    return this.digitalProductRepository.find();
  }

  async findAllProducts(): Promise<Product[]> {
    return this.productRepository.find();
  }

  async createDigitalProduct(
    data: CreateDigitalProductDto,
  ): Promise<DigitalProduct> {
    return this.digitalProductRepository.save(data);
  }

  async createPhysicalProduct(
    data: CreatePhysicalProductDto,
  ): Promise<PhysicalProduct> {
    return this.physicalProductRepository.save(data);
  }

  async deleteProductById(id: number): Promise<void> {
    this.productRepository.delete(id)
  }
}
