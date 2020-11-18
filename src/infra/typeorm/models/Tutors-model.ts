import { Entity, PrimaryGeneratedColumn, Column, BeforeInsert, BeforeUpdate } from 'typeorm';
import { Tutor } from "../entities/tutor";
import { IsNumber, Length, IsString, IsEmail, Min, Max } from 'class-validator';

@Entity('tutors')
export class tutors implements Tutor {

    @PrimaryGeneratedColumn('uuid')
    id: number;

    @Column()
    @IsString()
    @Length(10, 30)
    name: string;

    @Column()
    @IsEmail()
    email: string;
    unique: true;

    @Column()
    @Min(11)
    @Max(11)
    @IsNumber()
    rg: number;

    @Column()
    @IsString()
    @Min(11)
    @Max(11)
    cpf: string;

    @Column()
    @IsString()
    @Min(11)
    @Max(11)
    phone: string;

    @Column()
    @Min(8)
    @Max(8)
    @IsString()
    cep: string;

    @Column()
    @IsString()
    whatsapp: string;

    @Column()
    @IsString()
    @Length(10, 50)
    street: string;

    @Column()
    @IsString()
    number: string;

    @Column()
    @IsString()
    area: string;

    @Column()
    @IsString()
    complement: string;

}



export default Tutor;