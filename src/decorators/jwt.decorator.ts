// 验证 token 聚合装饰器
// 文档参考：https://docs.nestjs.cn/9/customdecorators?id=%e8%a3%85%e9%a5%b0%e5%99%a8%e8%81%9a%e5%90%88

import { applyDecorators, UseGuards } from '@nestjs/common';
import { AuthGuard } from '@nestjs/passport';

export function Auth() {
  return applyDecorators(UseGuards(AuthGuard('jwt')));
}
