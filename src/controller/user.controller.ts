import { Body, Controller, Get,Post } from "@nestjs/common";
import { CreateUserDTO } from "src/dto/create-user-dto";
import { UserService } from "src/service/user.service";
@Controller('/user')
export class UserController{
  constructor(readonly userService:UserService){}
  @Post('post')
  async postUser(@Body() request_user:CreateUserDTO): Promise<string> {
    const user = await this.userService.create(request_user)
    return user;
  }
}