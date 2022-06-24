/**
 * @description 47-全排列 II test
 * @author 氧化氢
 */

import permuteUnique from "./index1";

describe('47-全排列 II', () => {
  it('测试用例一', () => {
    const nums = [1,1,2]
    const res = permuteUnique(nums)
    expect(res).toEqual([[1,1,2],[1,2,1],[2,1,1]])
  })

  it('测试用例二', () => {
    const nums = [1,2,3]
    const res = permuteUnique(nums)
    expect(res).toEqual([[1,2,3],[1,3,2],[2,1,3],[2,3,1],[3,1,2],[3,2,1]])
  })
})