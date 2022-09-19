import { Injectable, NotFoundException } from '@nestjs/common';
import { PrismaService } from '../prisma/prisma.service';
import { RegisterDto } from './dto/register.dto';

import { md5Password } from '@/utils/handle_pwd';
import { LoginDto } from './dto/login.dto';

@Injectable()
export class UserService {
  constructor(private readonly prisma: PrismaService) {}

  // 注册
  async register(registerDto: RegisterDto) {
    const password = md5Password(registerDto.password);

    return await this.prisma.users.create({
      data: { ...registerDto, password },
    });
  }

  // 登录
  async login(loginDto: LoginDto) {
    const user = await this.prisma.users.findFirst({
      where: {
        username: loginDto.username,
        password: md5Password(loginDto.password),
      },
    });

    if (!user) {
      return new NotFoundException('账号或密码错误~');
    }

    delete user.password;
    return user;
  }
}
