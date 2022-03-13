"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.userProviders = void 0;
const constants_1 = require("./core/constants/constants");
const entity_1 = require("./entity");
exports.userProviders = [
    {
        provide: constants_1.USER_REPOSITORY,
        useFactory: (connection) => connection.getRepository(entity_1.Users),
        inject: [constants_1.DATABASE_CONNECTION],
    },
];
//# sourceMappingURL=user.providers.js.map