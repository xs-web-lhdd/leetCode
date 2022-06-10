/**
 * @description 78-子集 test
 * @author 氧化氢
 */

import test1 from './index'
import test2 from './index1'

describe('78-子集', () => {
  it('测试用例一', () => {
    const nums = [1,2,3]
    const res1 = test1(nums)
    const res2 = test2(nums)
    // 顺序
    expect(res1).toEqual([[],[3],[2],[2,3],[1],[1,3],[1,2],[1,2,3]])
    expect(res2).toEqual([[1,2,3],[2,3],[3],[2],[1,3],[1],[1,2],[]])
  })

  it('测试用例二', () => {
    const nums = [0]
    const res1 = test1(nums)
    const res2 = test2(nums)
    expect(res1).toEqual([[],[0]])
    expect(res2).toEqual([[0],[]])
  })
} )