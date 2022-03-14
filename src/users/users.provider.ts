import { Connection } from 'typeorm';
import {
  DATABASE_CONNECTION,
  USER_REPOSITORY,
} from '../core/constants/constants';
import { User } from '../users/entities/user.entity';

export const userProviders = [
  {
    provide: USER_REPOSITORY,
    useFactory: (connection: Connection) => connection.getRepository(User),
    inject: [DATABASE_CONNECTION],
  },
];
