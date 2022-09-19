import { ValidationPipe } from '@nestjs/common';
import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);

  // 应用全局管道验证器
  app.useGlobalPipes(new ValidationPipe());

  await app.listen(3000);
}
bootstrap();
