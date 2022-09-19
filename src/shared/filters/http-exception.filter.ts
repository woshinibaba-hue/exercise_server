// 全局异常拦截器 -- 用于转换错误格式
// 文档：https://docs.nestjs.cn/9/exceptionfilters?id=%e5%bc%82%e5%b8%b8%e8%bf%87%e6%bb%a4%e5%99%a8-1

import {
  ExceptionFilter,
  Catch,
  ArgumentsHost,
  HttpException,
} from '@nestjs/common';
import { Request, Response } from 'express';

@Catch()
export class HttpExceptionFilter implements ExceptionFilter {
  catch(exception: HttpException, host: ArgumentsHost) {
    const req = host.switchToHttp().getRequest<Request>();
    const res = host.switchToHttp().getResponse<Response>();

    let message = '服务器内部错误，请联系管理员解决',
      code = 500;

    if (exception instanceof HttpException) {
      message = (exception.getResponse() as any).message ?? exception.message;
      code = exception.getStatus();
    }

    const errData = {
      code,
      message,
      data: null,
      path: req.path,
      method: req.method,
      args: { ...req.body, ...req.params, ...req.query },
    };

    res.status(code).json(errData);
  }
}
