import { Injectable } from '@nestjs/common';
import { PrismaService } from '../prisma/prisma.service';
import { RegisterDto } from './dto/register.dto';

import { md5Password } from '@/utils/handle_pwd';

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
}
