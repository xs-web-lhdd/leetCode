/**
 * @description 46-全排列 test
 * @author 氧化氢
 */

import permute from "./index";

describe('46-全排列', () => {
  it('测试用例一', () => {
    const nums = [1,2,3]
    const res = permute(nums)
    expect(res).toEqual([[1,2,3],[1,3,2],[2,1,3],[2,3,1],[3,1,2],[3,2,1]])
  })

  it('测试用例二', () => {
    const nums = [0,1]
    const res = permute(nums)
    expect(res).toEqual([[0,1],[1,0]])
  })
  it('测试用例三', () => {
    const nums = [1]
    const res = permute(nums)
    expect(res).toEqual([[1]])
  })
})