import { getDuration } from './utils';

it('取得ISO 8601標準格式，回傳時間長度', () => {
  expect(getDuration('PT4M13S')).toBe('4分13秒');
  expect(getDuration('PT2M3S')).toBe('2分3秒');
});
