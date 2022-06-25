/**
 * @description 59-螺旋矩阵 II test
 * @author 氧化氢
 */

import generateMatrix from "./index";

describe('59-螺旋矩阵 II', () => {
  it('1 阶', () => {
    const n = 1
    const res = generateMatrix(n)
    expect(res).toEqual([[1]])
  })


  it('多阶', () => {
    const n = 3
    const res = generateMatrix(n)
    expect(res).toEqual([[1,2,3],[8,9,4],[7,6,5]])
  })
})