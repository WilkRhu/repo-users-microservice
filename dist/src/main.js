"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const core_1 = require("@nestjs/core");
const validate_pipe_1 = require("./core/pipe/validate.pipe");
const user_module_1 = require("./user.module");
async function bootstrap() {
    const app = await core_1.NestFactory.create(user_module_1.UserModule);
    app.setGlobalPrefix('/');
    app.useGlobalPipes(new validate_pipe_1.ValidateInputPipe());
    await app.listen(3000);
}
bootstrap();
//# sourceMappingURL=main.js.map