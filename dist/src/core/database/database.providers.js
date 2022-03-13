"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.databaseProviders = void 0;
const entity_1 = require("../../entity");
const typeorm_1 = require("typeorm");
const constants_1 = require("../constants/constants");
exports.databaseProviders = [
    {
        provide: constants_1.DATABASE_CONNECTION,
        useFactory: async () => await (0, typeorm_1.createConnection)({
            type: 'postgres',
            host: 'localhost',
            port: 5432,
            username: 'postgres',
            password: '1234',
            database: 'dashboard',
            entities: [entity_1.Users],
            synchronize: true,
        }),
    },
];
//# sourceMappingURL=database.providers.js.map