// src/products/digital/digital-product.entity.ts
import { ChildEntity, Column } from 'typeorm';
import { Product } from './product.entity';

@ChildEntity('digital')
export class DigitalProduct extends Product {
    @Column()
    downloadLink: string;
}
