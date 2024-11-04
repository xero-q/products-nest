import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Product } from 'src/common/entities/product.entity';
import { PhysicalProduct } from 'src/common/entities/physical-product.entity';
import { DigitalProduct } from 'src/common/entities/digital-product.entity';

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
    data: Partial<DigitalProduct>,
  ): Promise<DigitalProduct> {
    return this.digitalProductRepository.save(data);
  }

  async createPhysicalProduct(
    data: Partial<PhysicalProduct>,
  ): Promise<PhysicalProduct> {
    return this.physicalProductRepository.save(data);
  }
}
