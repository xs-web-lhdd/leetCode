/**
 * @description 31-下一个排列 test
 * @author 氧化氢
 */

import nextPermutation from "./index";

describe('31-下一个排列', () => {
  it('测试用例一', () => {
    const nums = [1,2,3]
    const res = nextPermutation(nums)
    expect(res).toEqual([1,3,2])
  })

  it('测试用例二', () => {
    const nums = [1,1,5]
    const res = nextPermutation(nums)
    expect(res).toEqual([1,5,1])
  })

  it('测试用例三', () => {
    const nums = [1,5,1]
    const res = nextPermutation(nums)
    expect(res).toEqual([5,1,1])
  })
})