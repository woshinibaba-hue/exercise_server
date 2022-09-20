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

  async findOne(id: number) {
    return await this.prisma.tags.findUnique({
      where: {
        id,
      },
    });
  }

  async update(id: number, updateTagDto: UpdateTagDto) {
    const oldTag = await this.prisma.tags.findUnique({
      where: {
        id,
      },
    });

    return await this.prisma.tags.update({
      where: {
        id,
      },
      data: {
        name: updateTagDto.name || oldTag.name,
        cover: updateTagDto.cover || oldTag.cover,
      },
    });
  }

  async remove(id: number) {
    return await this.prisma.tags.delete({
      where: {
        id,
      },
    });
  }
}
