import { Module } from '@nestjs/common';
import { UserController } from '../user.controller';
import { DatabaseModule } from './core/database/database.module';
import { userProviders } from './user.providers';
import { UserService } from './user.service';

@Module({
  imports: [DatabaseModule],
  controllers: [UserController],
  providers: [UserService, ...userProviders],
})
export class UserModule {}
