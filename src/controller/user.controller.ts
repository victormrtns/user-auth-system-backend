import { BadRequestException, Body, ConflictException, Controller, Get,Post } from "@nestjs/common";
import { InjectRepository } from "@nestjs/typeorm";
import { CreateUserDTO } from "src/dto/create-user-dto";
import { User } from "src/entity/user.entity";
import { UserRepository } from "src/repo/user.repository";
import { UserService } from "src/service/user.service";
@Controller('/user')
export class UserController{
  constructor(readonly userService:UserService,
    @InjectRepository(User)
    private readonly userRepository: UserRepository){}
  @Post('post')
  async postUser(@Body() request_user:CreateUserDTO){
    const user = await this.userRepository.findOne({
      where:[
        {username:request_user.userName},
        {email:request_user.email}
        ]
    })
    if(user){
      throw new ConflictException('User already exists in the database', { cause: new Error(), description: 'User already exists in the database' })
    }
    await this.userService.create(request_user);
    return request_user;
  }
}