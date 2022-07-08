/**
 * @description 300. 最长递增子序列 test
 * @author 氧化氢
 */

import lengthOfLIS from "./index1";

describe('300-最长递增子序列', () => {
  it('测试用例一', () => {
    const nums = [10,9,2,5,3,7,101,18]
    const res = lengthOfLIS(nums)
    expect(res).toBe(4)
  })

  it('测试用例二', () => {
    const nums = [0,1,0,3,2,3]
    const res = lengthOfLIS(nums)
    expect(res).toBe(4)
  })

  it('测试用例三', () => {
    const nums = [7,7,7,7,7,7,7]
    const res = lengthOfLIS(nums)
    expect(res).toBe(1)
  })
})