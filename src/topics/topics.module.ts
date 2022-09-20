import { Module } from '@nestjs/common';
import { TopicsService } from './topics.service';
import { TopicsController } from './topics.controller';
import { JwtStrategy } from '@/jwt.strategy';

@Module({
  controllers: [TopicsController],
  providers: [TopicsService, JwtStrategy],
})
export class TopicsModule {}
