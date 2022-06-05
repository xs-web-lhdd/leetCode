/**
 * @description 6091. 划分数组使最大差为 K  test
 * @author 氧化氢
 */

import partitionArray from './index'

describe('6091. 划分数组使最大差为 K', () => {
  it('测试用例 1', () => {
    const nums = [3,6,1,2,5], k = 2
    const res = partitionArray(nums, k)
    expect(res).toBe(2)
  })

  it('测试用例 2', () => {
    const nums = [1,2,3], k = 1
    const res = partitionArray(nums, k)
    expect(res).toBe(2)
  })

  it('测试用例 3', () => {
    const nums = [2,2,4,5], k = 0
    const res = partitionArray(nums, k)
    expect(res).toBe(3)
  })
})