/**
 * @description 402-移掉 K 位数字 test
 * @author 氧化氢
 */

import removeKdigits from "./index";

describe('402-移掉 K 位数字', () => {
  it('示例一', () => {
    const num = "1432219", k = 3
    const res = removeKdigits(num, k)
    expect(res).toBe('1219')
  })

  it('示例二', () => {
    const num = "10200", k = 1
    const res = removeKdigits(num, k)
    expect(res).toBe('200')
  })

  it('示例三', () => {
    const num = "10", k = 2
    const res = removeKdigits(num, k)
    expect(res).toBe('0')
  })
})