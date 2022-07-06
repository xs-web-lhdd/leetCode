/**
 * @description 198-打家劫舍 test
 * @author 氧化氢
 */

import rob from "./index";

describe('198-打家劫舍', () => {
  it('测试用例一', () => {
    const moneys = [1,2,3,1]
    const res = rob(moneys)
    expect(res).toBe(4)
  })

  it('测试用例二', () => {
    const moneys = [2,7,9,3,1]
    const res = rob(moneys)
    expect(res).toBe(12)
  })
})