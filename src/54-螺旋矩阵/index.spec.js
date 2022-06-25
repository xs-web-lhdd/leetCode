/**
 * @description 54-螺旋矩阵 test
 * @author 氧化氢
 */

import spiralOrder from "./index";

describe('54-螺旋矩阵', () => {
  it('n 行 n 列', () => {
    const matrix = [[1,2,3],[4,5,6],[7,8,9]]
    const res = spiralOrder(matrix)
    expect(res).toEqual([1,2,3,6,9,8,7,4,5])
  })

  it('n 行 m 列', () => {
    const matrix = [[1,2,3,4],[5,6,7,8],[9,10,11,12]]
    const res = spiralOrder(matrix)
    expect(res).toEqual([1,2,3,4,8,12,11,10,9,5,6,7])
  })

  it('1 行 1 列', () => {
    const matrix = [[1]]
    const res = spiralOrder(matrix)
    expect(res).toEqual([1])
  })
})