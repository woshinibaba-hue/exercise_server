import { IsExistRule } from '@/rules/is-exist-rule';
import { IsNotEmpty } from 'class-validator';

export class RegisterDto {
  @IsNotEmpty({ message: '用户名不能为空~' })
  @IsExistRule('users', { message: '当前用户已存在~' })
  username: string;

  @IsNotEmpty({ message: '密码不能为空~' })
  password: string;

  avatar?: string;
  referral?: string;
}
