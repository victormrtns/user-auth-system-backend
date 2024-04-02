import {Injectable } from "@nestjs/common";
import { InjectRepository } from "@nestjs/typeorm";
import { CreateUserDTO } from "src/dto/create-user-dto";
import { User } from "src/entity/user.entity";
import { UserRepository } from "src/repo/user.repository";

@Injectable()
export class UserService{
  constructor(
    @InjectRepository(User)
     private readonly userRepository: UserRepository,
  ){

  }
  async create(createUserDTO:CreateUserDTO):Promise<User>{
    const user = new User();
    user.username = "aaaaaaaaaaaaa"
    user.name = "victorrr"
    user.last_name = "aaaaaa"
    user.email = "vmhugo00@gmail.com"
    user.password = "asssssssssss"
    this.userRepository.save(user)
    return await user;
  }
}