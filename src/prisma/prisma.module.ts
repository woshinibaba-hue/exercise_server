import { Module, Global } from '@nestjs/common';
import { PrismaService } from './prisma.service';

@Global() // 设置为全局模块
@Module({
  providers: [PrismaService],
  // 导出该模块下的服务，在全局模块下，其它模块可进行使用
  exports: [PrismaService],
})
export class PrismaModule {}
