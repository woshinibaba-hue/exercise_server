import { ConfigModule, ConfigService } from '@nestjs/config';
import { Module } from '@nestjs/common';
import { UserService } from './user.service';
import { UserController } from './user.controller';
import { JwtModule } from '@nestjs/jwt';

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
  providers: [UserService],
})
export class UserModule {}
