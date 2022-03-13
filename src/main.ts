import { NestFactory } from '@nestjs/core';
import { ValidateInputPipe } from './core/pipe/validate.pipe';
import { UserModule } from './user.module';

async function bootstrap() {
  const app = await NestFactory.create(UserModule);
  app.setGlobalPrefix('/');
  app.useGlobalPipes(new ValidateInputPipe());
  await app.listen(3000);
}
bootstrap();
