import { Entity, PrimaryGeneratedColumn, Column } from 'typeorm';
import { Tutor } from "../entities/tutor";

@Entity('tutors')
export class tutors implements Tutor {

    @PrimaryGeneratedColumn('uuid')
    id: number;

    @Column()
    name: string;

    @Column()
    email: string;
    unique: true;

    @Column()
    rg: string;

    @Column()
    cpf: string;

    @Column()
    phone: string;

    @Column()
    cep: string;

    @Column()
    whatsapp: string;

    @Column()
    street: string;

    @Column()
    number: string;

    @Column()
    area: string;

    @Column()
    complement: string;

}



export default Tutor;