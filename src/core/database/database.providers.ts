import { createConnection } from 'typeorm';
import { Users } from '../../entity';
import { DATABASE_CONNECTION } from '../constants/constants';

export const databaseProviders = [
  {
    provide: DATABASE_CONNECTION,
    useFactory: async () =>
      await createConnection({
        type: 'postgres',
        host: 'localhost',
        port: 5432,
        username: 'postgres',
        password: '1234',
        database: 'dashboard',
        entities: [Users],
        synchronize: true,
      }),
  },
];
