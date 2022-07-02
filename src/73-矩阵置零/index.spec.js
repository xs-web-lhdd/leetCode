/**
 * @description 73-矩阵置零 test
 * @author 氧化氢
 */

import setZeroes from "./index";

describe('73-矩阵置零', () => {
  it('测试用例一', () => {
    const matrix = [[1,1,1],[1,0,1],[1,1,1]]
    const res = setZeroes(matrix)
    expect(res).toEqual([[1,0,1],[0,0,0],[1,0,1]])
  })

  it('测试用例二', () => {
    const matrix = [[0,1,2,0],[3,4,5,2],[1,3,1,5]]
    const res = setZeroes(matrix)
    expect(res).toEqual([[0,0,0,0],[0,4,5,0],[0,3,1,0]])
  })
})