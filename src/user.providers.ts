import { Connection } from 'typeorm';
import {
  DATABASE_CONNECTION,
  USER_REPOSITORY,
} from './core/constants/constants';
import { Users } from './entity';

export const userProviders = [
  {
    provide: USER_REPOSITORY,
    useFactory: (connection: Connection) => connection.getRepository(Users),
    inject: [DATABASE_CONNECTION],
  },
];
