import * as crypto from 'crypto';

export const md5Password = (password: string) => {
  // 创建md5对象
  const md5 = crypto?.createHash('md5');
  // 进行加密
  return md5.update(password).digest('hex');
};
