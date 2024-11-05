import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Product } from 'src/entities/product.entity';
import { PhysicalProduct } from 'src/entities/physical-product.entity';
import { DigitalProduct } from 'src/entities/digital-product.entity';
import { CreateDigitalProductDto } from 'src/dtos/create-digital-product.dto';
import { CreatePhysicalProductDto } from 'src/dtos/create-physical-product.dto';
import { UpdateDigitalProductDto } from 'src/dtos/update-digital-product.dto';
import { UpdatePhysicalProductDto } from 'src/dtos/update-physical-product.dto';

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

  async findAllProducts(
    page: number,
    pageSize: number,
  ): Promise<{ results: Product[]; total: number }> {
    const [results, total] = await this.productRepository.findAndCount({
      skip: (page - 1) * pageSize,
      take: pageSize,
    });

    return { results, total };
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
    this.productRepository.delete(id);
  }

  async updateDigitalProduct(
    id: number,
    data: UpdateDigitalProductDto,
  ): Promise<DigitalProduct> {
    const product = await this.digitalProductRepository.findOne({
      where: { id },
    });

    if (!product) {
      throw new NotFoundException(`Product with ID ${id} not found`);
    }

    // Update only the fields provided in the DTO
    for (const key in data) {
      if (data[key] !== undefined) {
        product[key] = data[key];
      }
    }

    return this.digitalProductRepository.save(product);
  }

  async updatePhysicalProduct(
    id: number,
    data: UpdatePhysicalProductDto,
  ): Promise<PhysicalProduct> {
    const product = await this.physicalProductRepository.findOne({
      where: { id },
    });

    if (!product) {
      throw new NotFoundException(`Product with ID ${id} not found`);
    }

    // Update only the fields provided in the DTO
    for (const key in data) {
      if (data[key] !== undefined) {
        product[key] = data[key];
      }
    }

    return this.physicalProductRepository.save(product);
  }

  async getProduct(id: number): Promise<Product>{
    return this.productRepository.findOne({where: {id}})
  }
}
