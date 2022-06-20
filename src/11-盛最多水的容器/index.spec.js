/**
 * @description 11. 盛最多水的容器 test
 * @author 氧化氢
 */

import maxArea from './index'

describe('11. 盛最多水的容器', () => {
  it('测试用例一', () => {
    const n = [1,8,6,2,5,4,8,3,7]
    const res = maxArea(n)
    expect(res).toBe(49)
  })

  it('测试用例二', () => {
    const n = [1,1,1]
    const res = maxArea(n)
    expect(res).toBe(2)
  })
})