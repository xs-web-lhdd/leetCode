/**
 * @description 1863-找出所有子集的异或总和再求和 test
 * @author 氧化氢
 */

import { subsetXORSum } from './index'

describe('1863-找出所有子集的异或总和再求和', () => {
  it('示例一', () => {
    const nums = [1,3]
    const res = subsetXORSum(nums)
    expect(res).toBe(6)
  })

  it('示例二', () => {
    const nums = [5,1,6]
    const res = subsetXORSum(nums)
    expect(res).toBe(28)
  })

  it('示例三', () => {
    const nums = [3,4,5,6,7,8]
    const res = subsetXORSum(nums)
    expect(res).toBe(480)
  })
})