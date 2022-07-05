/**
 * @description 53-最大子数组和 test
 * @author 氧化氢
 */

import maxSubArray from './index'

describe('53-最大子数组和', () => {
  it('测试用例一', () => {
    const nums = [-2,1,-3,4,-1,2,1,-5,4]
    const res = maxSubArray(nums)
    expect(res).toBe(6)
  })

  it('测试用例二', () => {
    const nums = [5,4,-1,7,8]
    const res = maxSubArray(nums)
    expect(res).toBe(23)
  })

  it('数组长度为一的情况', () => {
    const nums = [-1]
    const res = maxSubArray(nums)
    expect(res).toBe(-1)
  })
})