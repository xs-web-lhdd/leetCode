/**
 * @description 933 最近的请求次数 test
 * @author 氧化氢
 */

import RecentCounter from "./index";

describe('933-最近的请求次数', () => {
  test('测试用例一', () => {
    var counter = new RecentCounter()
    expect(counter.ping(1)).toBe(1)
    expect(counter.ping(100)).toBe(2)
    expect(counter.ping(3001)).toBe(3)
    expect(counter.ping(3002)).toBe(3)
  })
})