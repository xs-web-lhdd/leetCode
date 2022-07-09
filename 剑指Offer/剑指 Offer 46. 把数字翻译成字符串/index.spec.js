/**
 * @description 剑指 Offer 46. 把数字翻译成字符串 test
 * @author 氧化氢
 */

import translateNum from './index'

describe('剑指 Offer 46. 把数字翻译成字符串', () => {
  it('测试用例一', () => {
    const num = 12258
    const res = translateNum(num)
    expect(res).toBe(5)
  })

  it('测试用例二', () => {
    const num = 38294
    const res = translateNum(num)
    expect(res).toBe(1)
  })
})