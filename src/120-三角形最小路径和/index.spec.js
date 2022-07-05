/**
 * @description 120-三角形最小路径和 test
 * @author 氧化氢
 */

import minimumTotal from "./index";

describe('120-三角形最小路径和', () => {
  it('测试用例一', () => {
    const triangle = [[2],[3,4],[6,5,7],[4,1,8,3]]
    const res = minimumTotal(triangle)
    expect(res).toBe(11)
  })

  it('测试用例二', () => {
    const triangle = [[-10]]
    const res = minimumTotal(triangle)
    expect(res).toBe(-10)
  })
})