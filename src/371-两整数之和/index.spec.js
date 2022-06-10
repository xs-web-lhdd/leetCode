/**
 * @description 371-两整数之和 test
 * @author 氧化氢
 */

import { getSum } from './index'

describe('371-两整数之和', () => {
  it('示例一', () => {
    const a = 1, b = 2
    const res = getSum(a, b)
    expect(res).toBe(3)
  })
})