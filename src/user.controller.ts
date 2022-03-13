import { Body, Controller, Get, Post } from '@nestjs/common';
import { CreateUserDto } from './DTO/user.create.dto';
import { Users } from './entity';
import { UserService } from './user.service';

@Controller('users')
export class UserController {
  constructor(private readonly userService: UserService) {}

  @Post()
  async create(@Body() user: CreateUserDto): Promise<Users> {
    return await this.userService.create(user);
  }

  @Get()
  getHello() {
    return 'Teste Route';
  }
}
