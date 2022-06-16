/**
 * @description 剑指 Offer 04. 二维数组中的查找 test
 * @author 氧化氢
 */

import { findNumberIn2DArray } from './index'

describe('剑指 Offer 04. 二维数组中的查找', () => {
  it('测试用例一', () => {
    const matrix = [[1,3,5,7],[10,11,16,20],[23,30,34,60]], target = 3
    const res = findNumberIn2DArray(matrix, target)
    expect(res).toBe(true)
  })

  it('测试用例二', () => {
    const matrix = [[1,3,5,7],[10,11,16,20],[23,30,34,60]], target = 13
    const res = findNumberIn2DArray(matrix, target)
    expect(res).toBe(false)
  })
})