import { Entity, PrimaryGeneratedColumn, Column } from "typeorm";

@Entity('Products')
class Products {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @Column()
  name: string;

  @Column()
  valor: number;

  @Column()
  custo: number;

  @Column()
  estoque: number;
}

export { Products };