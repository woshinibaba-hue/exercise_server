import { Module } from '@nestjs/common';
import { TagsService } from './tags.service';
import { TagsController } from './tags.controller';
import { JwtStrategy } from '@/jwt.strategy';

@Module({
  controllers: [TagsController],
  // 将jwt验证策略添加到提供者 JwtStrategy
  providers: [TagsService, JwtStrategy],
})
export class TagsModule {}
