import { IsExistRule } from '@/rules/is-exist-rule';
import { IsNotEmpty } from 'class-validator';

export class CreateTopicDto {
  @IsNotEmpty({ message: '题目标题不能为空~' })
  @IsExistRule('topics', { message: '该题目已存在' })
  title: string;

  hard?: number;

  @IsNotEmpty({ message: '当前题目分类不能为空~' })
  tagsId: number;

  usersId: number;

  @IsNotEmpty({ message: '题目答案不能为空~' })
  answer: string;
}
