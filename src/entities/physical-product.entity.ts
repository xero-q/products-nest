// src/products/physical/physical-product.entity.ts
import { ChildEntity, Column } from 'typeorm';
import { Product } from './product.entity';

@ChildEntity('physical')
export class PhysicalProduct extends Product {
    @Column('decimal')
    shipmentCost: number;
}
