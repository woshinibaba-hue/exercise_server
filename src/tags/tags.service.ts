import { Injectable } from '@nestjs/common';
import { CreateTagDto } from './dto/create-tag.dto';
import { UpdateTagDto } from './dto/update-tag.dto';
import { PrismaService } from '@/prisma/prisma.service';

@Injectable()
export class TagsService {
  constructor(private readonly prisma: PrismaService) {}

  async create(createTagDto: CreateTagDto) {
    return await this.prisma.tags.create({
      data: createTagDto,
    });
  }

  async findAll({ limit = 10, page = 1 }: { limit?: number; page?: number }) {
    const total = await this.prisma.tags.count();
    const maxPage = Math.ceil(total / limit);

    const tags = await this.prisma.tags.findMany({
      skip: (page - 1) * limit,
      take: +limit,
    });

    return {
      tags,
      total,
      isMove: maxPage > page,
    };
  }

  findOne(id: number) {
    return `This action returns a #${id} tag`;
  }

  update(id: number, updateTagDto: UpdateTagDto) {
    return `This action updates a #${id} tag`;
  }

  remove(id: number) {
    return `This action removes a #${id} tag`;
  }
}
