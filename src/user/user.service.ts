import { Injectable } from '@nestjs/common';
import { PrismaService } from '../prisma/prisma.service';
import { RegisterDto } from './dto/register.dto';

@Injectable()
export class UserService {
  constructor(private readonly prisma: PrismaService) {}

  // 注册
  async register(registerDto: RegisterDto) {
    return registerDto;
  }
}
