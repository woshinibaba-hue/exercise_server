import { HttpExceptionFilter } from './shared/filters/http-exception.filter';
import { ValidationPipe } from '@nestjs/common';
import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { ResInterceptor } from './shared/interceptor/res.interceptor';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);

  // 应用全局管道验证器
  app.useGlobalPipes(new ValidationPipe());

  // 用于全局错误过滤器
  app.useGlobalFilters(new HttpExceptionFilter());

  app.useGlobalInterceptors(new ResInterceptor());

  await app.listen(3000);
}
bootstrap();
