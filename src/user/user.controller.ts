import { Body, Controller, Post } from '@nestjs/common';
import { UserService } from './user.service';

import { LoginDto } from './dto/login.dto';
import { RegisterDto } from './dto/register.dto';

@Controller('user')
export class UserController {
  constructor(private readonly userService: UserService) {}

  // 注册
  // @UseGuards(AuthGuard('jwt')) // 使用jwt验证策略
  // @Auth() // 使用聚合装饰器验证jwt
  @Post('register')
  async register(@Body() registerDto: RegisterDto) {
    return await this.userService.register(registerDto);
  }

  // 登录
  @Post('login')
  async login(@Body() loginDto: LoginDto) {
    return await this.userService.login(loginDto);
  }
}
