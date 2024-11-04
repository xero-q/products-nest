// src/common/entities/product.entity.ts
import {
  Entity,
  PrimaryGeneratedColumn,
  Column,
  TableInheritance,
} from 'typeorm';

@Entity('products')
@TableInheritance({ column: { type: 'varchar', name: 'type' } })
export abstract class Product {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  code: string;

  @Column()
  name: string;
}
