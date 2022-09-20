import { PrismaService } from '@/prisma/prisma.service';
import { Injectable } from '@nestjs/common';
import { CreateTopicDto } from './dto/create-topic.dto';
import { UpdateTopicDto } from './dto/update-topic.dto';

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

  findAll() {
    return `This action returns all topics`;
  }

  findOne(id: number) {
    return `This action returns a #${id} topic`;
  }

  update(id: number, updateTopicDto: UpdateTopicDto) {
    return `This action updates a #${id} topic`;
  }

  async remove(id: number) {
    return await this.prisma.topics.delete({
      where: {
        id,
      },
    });
  }
}
