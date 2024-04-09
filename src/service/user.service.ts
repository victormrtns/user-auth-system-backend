import {Body, Injectable } from "@nestjs/common";
import { InjectRepository } from "@nestjs/typeorm";
import { CreateUserDTO } from "src/dto/create-user-dto";
import { User } from "src/entity/user.entity";
import { UserRepository } from "src/repo/user.repository";
import * as bcrypt from 'bcrypt';
@Injectable()
export class UserService{
  constructor(
    @InjectRepository(User)
     private readonly userRepository: UserRepository,
  ){

  }
  async create(createUserDTO:CreateUserDTO):Promise<User>{
    const user = new User();
    createUserDTO.password = await bcrypt.hash(createUserDTO.password,10)
    const { userName, firstName, lastName, email, password } = createUserDTO;
    let user_saved = { ...user, username: userName, name: firstName, last_name: lastName, email, password };
    await this.userRepository.save(user_saved);
    return user_saved;
  }
}