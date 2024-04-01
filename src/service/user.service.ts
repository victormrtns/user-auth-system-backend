import { Injectable } from "@nestjs/common";
import { CreateUserDTO } from "src/dto/create-user-dto";

@Injectable()
export class UserService{
  async create(createUserDTO:CreateUserDTO){
    return await "hello";
  }
}