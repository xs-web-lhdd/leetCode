/**
 * @description 剑指 Offer 42. 连续子数组的最大和 test
 * @author 氧化氢
 */

import maxSubArray from './index'

describe('剑指 Offer 42. 连续子数组的最大和', () => {
  it('正常情况', () => {
    const nums = [-2,1,-3,4,-1,2,1,-5,4]
    const res = maxSubArray(nums)
    expect(res).toBe(6)
  })

  it('边界情况', () => {
    const nums = [-2]
    const res = maxSubArray(nums)
    expect(res).toBe(-2)
  })
})