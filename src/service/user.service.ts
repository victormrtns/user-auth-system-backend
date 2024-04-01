import { Injectable } from "@nestjs/common";
import { CreateUserDTO } from "src/dto/create-user-dto";
import { User } from "src/entity/user.entity";

@Injectable()
export class UserService{
  async create(createUserDTO:CreateUserDTO):Promise<User>{
    const user = new User();
    user.username = "aaaaaaaaaaaaa"
    user.name = "victorrr"
    user.last_name = "aaaaaa"
    user.email = "vmhugo00@gmail.com"
    return user;
  }
}