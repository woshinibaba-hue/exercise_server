import { Global, Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { PrismaModule } from './prisma/prisma.module';
import { UserModule } from './user/user.module';
import { TagsModule } from './tags/tags.module';
import { TopicsModule } from './topics/topics.module';

@Global()
@Module({
  imports: [
    ConfigModule.forRoot({
      isGlobal: true,
    }),
    PrismaModule,
    UserModule,
    TagsModule,
    TopicsModule,
  ],
  controllers: [],
  providers: [],
})
export class AppModule {}
