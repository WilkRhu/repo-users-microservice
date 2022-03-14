import { Module } from '@nestjs/common';
import { USER_REPOSITORY } from 'src/core/constants/constants';
import { DatabaseModule } from 'src/core/database/database.module';
import { UsersController } from './users.controller';
import { userProviders } from './users.provider';
import { UsersService } from './users.service';

@Module({
  imports: [DatabaseModule],
  controllers: [UsersController],
  providers: [UsersService, ...userProviders],
  exports: [UsersService, USER_REPOSITORY],
})
export class UsersModule {}
