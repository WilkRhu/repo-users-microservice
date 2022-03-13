import { Inject, Injectable } from '@nestjs/common';
import { Repository } from 'typeorm';
import { USER_REPOSITORY } from './core/constants/constants';
import { CreateUserDto } from './DTO/user.create.dto';
import { Users } from './entity';

@Injectable()
export class UserService {
  constructor(
    @Inject(USER_REPOSITORY)
    private userRepository: Repository<Users>,
  ) {}

  async create(createUserDto: CreateUserDto): Promise<Users> {
    return await this.userRepository.create(createUserDto);
  }

  getUsers(): string {
    return 'Hello World!';
  }
}
