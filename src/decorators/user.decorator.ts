// 获取验证 jwt 存放在request中的用户信息 -- 自定义装饰器
// 文档参考：https://docs.nestjs.cn/9/customdecorators

import { createParamDecorator, ExecutionContext } from '@nestjs/common';
import { Request } from 'express';

export const User = createParamDecorator(
  (data: unknown, ctx: ExecutionContext) => {
    const request = ctx.switchToHttp().getRequest<Request>();
    return request.user;
  },
);
