import { Entity, PrimaryGeneratedColumn, Column, ManyToOne, OneToMany } from "typeorm";
import { User } from "./user.entity";

@Entity('Sales')
 class Sales {
    @PrimaryGeneratedColumn('uuid')
    id: string

    @Column({length: 50})
    name: string
    
    @Column()
    valor: number

    @Column()
    produto: string

    @Column({length: 10})
    status: string

    @Column()
    quantidade: number

    @ManyToOne(() => User, user => user.sales)
    user: User;
 }
 

export { Sales }
