import { Connection } from 'typeorm';
import { Users } from './entity';
export declare const userProviders: {
    provide: string;
    useFactory: (connection: Connection) => import("typeorm").Repository<Users>;
    inject: string[];
}[];
