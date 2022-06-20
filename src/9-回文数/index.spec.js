/**
 * @description 9-回文数 test
 * @author 氧化氢
 */

import isPalindrome from "./index";

describe('9-回文数', () => {
  it('正数且回文数', () => {
    const n = 121
    const res = isPalindrome(n)
    expect(res).toBe(true)
  })

  it('正数非回文数', () => {
    const n = 1211
    const res = isPalindrome(n)
    expect(res).toBe(false)
  })

  it('负数', () => {
    const n = -100
    const res = isPalindrome(n)
    expect(res).toBe(false)
  })
})