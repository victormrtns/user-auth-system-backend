import { Entity,Column,PrimaryGeneratedColumn } from "typeorm";
import {IsEmail,Length} from "class-validator";

@Entity()
export class User{
  @PrimaryGeneratedColumn()
  id: number;

  @Column({unique: true})
  @Length(10, 20)
  username: string;

  @Column()
  password: string;

  @Column()
  @Length(10, 20)
  name: string;

  @Column()
  last_name: string;
  
  @Column({unique: true})
  @IsEmail()
  email: string;
}