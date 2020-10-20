import { Entity, Column, PrimaryGeneratedColumn, OneToMany, JoinColumn } from "typeorm";

import Image from './Images';

@Entity('orphanages')
export default class Opharnage{
    @PrimaryGeneratedColumn('increment')
    id: number;

    @Column()
    name: string;

    @Column()
    latitude: number;

    @Column()
    longitude: number;

    @Column()
    about: string;

    @Column()
    instructions: string;

    @Column()
    opening_hours: string;
    
    @Column()
    open_on_weekend: boolean;
                    //O tipo de retorno //Dado uma imagem, qual o campo me retorna o orfanato       
    @OneToMany(() => Image, image => image.orphanage, {
        cascade: ['insert', 'update']
    })
    @JoinColumn({name: 'orphanage_id'})
    images: Image[]
}