/**
 * @description 90-子集 II test
 * @author 氧化氢
 */

import subsetsWithDup from "./index";

describe('90-子集 II', () => {
  it('测试用例一', () => {
    const nums = [1,2,2]
    const res = subsetsWithDup(nums)
    expect(res).toEqual([[],[2],[2,2],[1],[1,2],[1,2,2]])
  })

  it('测试用例二', () => {
    const nums = [0]
    const res = subsetsWithDup(nums)
    expect(res).toEqual([[],[0]])
  })
})