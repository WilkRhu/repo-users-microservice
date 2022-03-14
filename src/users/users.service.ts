import { Inject, Injectable } from '@nestjs/common';
import { Repository } from 'typeorm';
import { USER_REPOSITORY } from '../core/constants/constants';
import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';
import { User } from './entities/user.entity';

@Injectable()
export class UsersService {
  constructor(
    @Inject(USER_REPOSITORY)
    private userRepository: Repository<User>,
  ) {}

  async create(createUserDto: CreateUserDto): Promise<User> {
    try {
      return await this.userRepository.save(createUserDto);
    } catch (error) {
      throw new Error(error);
    }
  }

  async findAll(): Promise<User[]> {
    try {
      return await this.userRepository.find();
    } catch (error) {
      throw new Error(error);
    }
  }

  async findOne(uuid: string): Promise<User> {
    try {
      return await this.userRepository.findOne(uuid);
    } catch (error) {
      throw new Error(error);
    }
  }

  async update(uuid: string, updateUserDto: UpdateUserDto) {
    try {
      await this.userRepository.update(uuid, updateUserDto);
      return await this.userRepository.findOne(uuid);
    } catch (error) {
      throw new Error(error);
    }
  }

  async remove(uuid: string) {
    try {
      await this.userRepository.delete(uuid);
      return 'User Deleted Success!';
    } catch (error) {
      throw new Error(error);
    }
  }
}
