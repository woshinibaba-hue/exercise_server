// 验证数据不存在 --- 管道验证
import { PrismaService } from '@/prisma/prisma.service';
import { Injectable, PipeTransform, BadRequestException } from '@nestjs/common';

@Injectable()
export class ExistPipe implements PipeTransform {
  tableName: string;
  prisma: PrismaService;

  constructor(tableName: string) {
    this.tableName = tableName;
    this.prisma = new PrismaService();
  }

  async transform(value: any) {
    const res = await this.prisma.topics.findUnique({
      where: {
        id: +value,
      },
    });

    if (!res) {
      throw new BadRequestException('当前数据不存在~');
    }

    return value;
  }
}
