/**
 * @description 6092. 替换数组中的元素 test
 * @author 氧化氢
 */

import arrayChange from './index'

describe('6092. 替换数组中的元素', () => {
  it('测试用例 1', () => {
    const nums = [1,2,4,6], operations = [[1,3],[4,7],[6,1]]
    const res = arrayChange(nums, operations)
    expect(res).toEqual([3,2,7,1])
  })
  
  it('测试用例 2', () => {
    const nums = [1,2], operations = [[1,3],[2,1],[3,2]]
    const res = arrayChange(nums, operations)
    expect(res).toEqual([2,1])
  })
})