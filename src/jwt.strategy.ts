import { PrismaService } from './prisma/prisma.service';
// jwt 验证策略
// nest文档参考：https://docs.nestjs.cn/9/security?id=%e8%ae%a4%e8%af%81%ef%bc%88authentication%ef%bc%89

import { ExtractJwt, Strategy } from 'passport-jwt';
import { PassportStrategy } from '@nestjs/passport';
import { Injectable } from '@nestjs/common';
import { ConfigService } from '@nestjs/config';

@Injectable()
export class JwtStrategy extends PassportStrategy(Strategy, 'jwt') {
  constructor(
    private readonly config: ConfigService,
    private prisma: PrismaService,
  ) {
    super({
      // 获取请求头中的token
      jwtFromRequest: ExtractJwt.fromAuthHeaderAsBearerToken(),
      secretOrKey: config.get('TOKEN_KEY'),
    });
  }

  // validate() 方法的返回值构建一个user 对象，并将其作为属性附加到请求对象(request.user)上。
  // 参数就是存放在 token 中的字段
  async validate({ id }) {
    const user = await this.prisma.users.findUnique({
      where: {
        id,
      },
    });

    delete user.password;

    return user;
  }
}
