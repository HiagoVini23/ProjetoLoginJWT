import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";

@Entity("user")
export default class User {
    @PrimaryGeneratedColumn('increment')
    id: number;

    @Column()
    login: string;

    @Column()
    senha: string;
}