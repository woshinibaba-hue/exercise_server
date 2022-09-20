import { IsExistRule } from '@/rules/is-exist-rule';
import { IsNotEmpty } from 'class-validator';

export class CreateTagDto {
  @IsNotEmpty({ message: '分类名称不能为空~' })
  @IsExistRule('tags', { message: '当前分类已存在~' })
  name: string;

  cover?: string;
}
