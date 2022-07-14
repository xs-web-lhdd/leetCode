/**
 * @description 202-快乐数
 * @author 氧化氢
 */

import isHappy from "./index1";

describe('202-快乐数', () => {
  test('是快乐数', () => {
    const n = 19
    const res = isHappy(n)
    expect(res).toBe(true)
  })

  test('非快乐数', () => {
    const n = 2
    const res = isHappy(n)
    expect(res).toBe(false)
  })
})