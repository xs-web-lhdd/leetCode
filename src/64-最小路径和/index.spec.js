/**
 * @description 64-最小路径和 test
 * @author 氧化氢
 */

import minPathSum from "./index";

describe('64-最小路径和', () => {
  it('测试用例一', () => {
    const grid = [[1,3,1],[1,5,1],[4,2,1]]
    const res = minPathSum(grid)
    expect(res).toBe(7)
  })

  it('测试用例二', () => {
    const grid = [[1,2,3],[4,5,6]]
    const res = minPathSum(grid)
    expect(res).toBe(12)
  })
})