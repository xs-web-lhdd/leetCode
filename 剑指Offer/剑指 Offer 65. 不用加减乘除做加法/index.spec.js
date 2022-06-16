/**
 * @description 剑指 Offer 65. 不用加减乘除做加法
 * @author 氧化氢
 */

import add from "./index";

describe('剑指 Offer 65. 不用加减乘除做加法', () => {
  it('示例一', () => {
    const a = 1, b = 1
    const res = add(a, b)
    expect(res).toBe(2)
  })

  it('示例二', () => {
    const a = 5, b = 10
    const res = add(a, b)
    expect(res).toBe(15)
  })
})