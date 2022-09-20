import { Module } from '@nestjs/common';
import { ConfigModule, ConfigService } from '@nestjs/config';
import { JwtModule } from '@nestjs/jwt';
import { UserController } from './user.controller';
import { UserService } from './user.service';

@Module({
  imports: [
    JwtModule.registerAsync({
      imports: [ConfigModule],
      inject: [ConfigService],
      useFactory: (config: ConfigService) => ({
        secret: config.get('TOKEN_KEY'),
        signOptions: {
          expiresIn: '30d',
        },
      }),
    }),
  ],
  controllers: [UserController],
  // 将jwt验证策略添加到提供者 JwtStrategy
  providers: [UserService],
})
export class UserModule {}
