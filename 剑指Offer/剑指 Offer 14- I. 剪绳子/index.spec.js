/**
 * @descripton 剑指 Offer 14- I. 剪绳子 test
 * @author 氧化氢
 */

import cuttingRope from './index'

describe('剑指 Offer 14- I. 剪绳子', () => {
  it('测试用例一', () => {
    const num = 2
    const res = cuttingRope(num)
    expect(res).toBe(1)
  })

  it('测试用例二', () => {
    const num = 10
    const res = cuttingRope(num)
    expect(res).toBe(36)
  })

  it('测试用例三', () => {
    const num = 67
    const res = cuttingRope(num)
    expect(res).toBe(41841412812)
    })
})
