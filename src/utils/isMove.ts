// 是否存在下一页
export function isMove(total: number, limit: number, page: number) {
  const max = Math.ceil(total / limit);

  return max > page;
}
