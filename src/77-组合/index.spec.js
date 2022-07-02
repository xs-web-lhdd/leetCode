/**
 * @description 77-组合 test
 * @author 氧化氢
 */

import combine from './index'

describe('77-组合', () => {
  it('测试用例一', () => {
    const n = 4, k = 2
    const res = combine(n , k)
    expect(res).toEqual([[1,2],[1,3],[1,4],[2,3],[2,4],[3,4]])
  })

  it('测试用例二', () => {
    const n = 1, k = 1
    const res = combine(n, k)
    expect(res).toEqual([[1]])
  })
})