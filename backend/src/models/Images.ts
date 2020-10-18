import { Entity, Column, PrimaryGeneratedColumn, ManyToMany, JoinColumn } from "typeorm";

import Orphanage from './Opharnage';

@Entity('images')
export default class Opharnage{
    @PrimaryGeneratedColumn('increment')
    id: number;

    @Column()
    path: string;    

    @ManyToMany(() => Orphanage, orphanage => orphanage.images)
    @JoinColumn({name: 'orphanage_id'})
    orphanage: Opharnage;
}