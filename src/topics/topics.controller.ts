import { Auth } from '@/decorators/jwt.decorator';
import { User } from '@/decorators/user.decorator';
import { ExistPipe } from '@/shared/pipe/exist.pipe';
import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Patch,
  Post,
  UsePipes,
} from '@nestjs/common';
import { users } from '@prisma/client';
import { CreateTopicDto } from './dto/create-topic.dto';
import { UpdateTopicDto } from './dto/update-topic.dto';
import { TopicsService } from './topics.service';

@Controller('topic')
export class TopicsController {
  constructor(private readonly topicsService: TopicsService) {}

  @Auth()
  @Post()
  create(@Body() createTopicDto: CreateTopicDto, @User() user: users) {
    return this.topicsService.create({ ...createTopicDto, usersId: user.id });
  }

  @Get()
  findAll() {
    return this.topicsService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.topicsService.findOne(+id);
  }

  @Auth()
  @Patch(':id')
  update(@Param('id') id: string, @Body() updateTopicDto: UpdateTopicDto) {
    return this.topicsService.update(+id, updateTopicDto);
  }

  @Auth()
  @UsePipes(new ExistPipe('topics'))
  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.topicsService.remove(+id);
  }
}
