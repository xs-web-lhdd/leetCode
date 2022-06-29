/**
 * @description 38-外观数列 test
 * @author 氧化氢
 */

import countAndSay from "./index";

describe('38-外观数列', () => {
  it('测试用例一', () => {
    const n = 1
    const res = countAndSay(n)
    expect(res).toBe('1')
  })

  it('测试用例二', () => {
    const n = 4
    const res = countAndSay(n)
    expect(res).toBe('1211')
  })

  it('测试用例三', () => {
    const n = 7
    const res = countAndSay(n)
    expect(res).toBe('13112221')
  })
})