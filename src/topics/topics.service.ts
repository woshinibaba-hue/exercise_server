import { PrismaService } from '@/prisma/prisma.service';
import { Injectable } from '@nestjs/common';
import { CreateTopicDto } from './dto/create-topic.dto';
import { UpdateTopicDto } from './dto/update-topic.dto';

import { isMove } from '@/utils/isMove';

@Injectable()
export class TopicsService {
  constructor(private prisma: PrismaService) {}

  async create(createTopicDto: CreateTopicDto) {
    return await this.prisma.topics.create({
      data: {
        ...createTopicDto,
        hard: +createTopicDto.hard,
        tagsId: +createTopicDto.tagsId,
        usersId: +createTopicDto.usersId,
      },
    });
  }

  async findAll({ limit = 10, page = 1 }: { limit?: number; page?: number }) {
    const total = await this.prisma.topics.count();
    const topics = await this.prisma.topics.findMany({
      skip: (page - 1) * limit,
      take: +limit,
    });

    return {
      total,
      topics,
      isMove: isMove(total, limit, page),
    };
  }

  async findOne(id: number) {
    return await this.prisma.topics.findUnique({
      where: {
        id,
      },
    });
  }

  async update(id: number, updateTopicDto: UpdateTopicDto) {
    const old = await this.prisma.topics.findUnique({
      where: {
        id,
      },
    });

    return await this.prisma.topics.update({
      where: {
        id,
      },
      data: {
        title: updateTopicDto.title ?? old.title,
        answer: updateTopicDto.answer ?? old.answer,
        hard: +updateTopicDto.hard ?? +old.hard,
        tagsId: updateTopicDto.tagsId ?? +old.tagsId,
      },
    });
  }

  async remove(id: number) {
    return await this.prisma.topics.delete({
      where: {
        id,
      },
    });
  }
}
