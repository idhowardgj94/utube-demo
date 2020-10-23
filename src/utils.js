// @flow

export function getDuration(t: String | string): string {
  const r = t
    .split('T')[1]
    .replace('M', '分')
    .replace('S', '秒')
    .replace('H', '時');
  return r;
}
