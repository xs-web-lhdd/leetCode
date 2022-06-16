/**
 * @description 剑指 Offer 64. 求1+2+…+n test
 * @author 氧化氢
 */

import sumNums from "./index";

describe('剑指 Offer 64. 求1+2+…+n', () => {
  it('示例一', () => {
    const n = 3
    const res = sumNums(n)
    expect(res).toBe(6)
  })

  it('示例二', () => {
    const n = 9
    const res = sumNums(n)
    expect(res).toBe(45)
  })
})