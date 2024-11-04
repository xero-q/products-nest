import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { PhysicalProduct } from './physical/physical-product.entity';
import { Product } from 'src/common/entities/product.entity';
import { DigitalProduct } from './digital/digital-product.entity';

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
    return this.productRepository.find({
      where: { type: 'physical' },
    }) as Promise<PhysicalProduct[]>;
  }

  async findAllDigitalProducts(): Promise<DigitalProduct[]> {
    return this.productRepository.find({
      where: { type: 'digital' },
    }) as Promise<DigitalProduct[]>;
  }

  async findAllProducts(): Promise<Product[]>{
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
