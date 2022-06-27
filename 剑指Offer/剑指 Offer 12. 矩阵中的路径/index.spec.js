/**
 * @description 剑指 Offer 12. 矩阵中的路径 test
 * @author 氧化氢
 */

import exist from "./index";

describe('剑指 Offer 12. 矩阵中的路径', () => {
  it('测试用例一', () => {
    const board = [["A","B","C","E"],["S","F","C","S"],["A","D","E","E"]], word = "ABCCED"
    const res = exist(board, word)
    expect(res).toBe(true)
  })

  it('测试用例二', () => {
    const board = [['A','B','C','D'],['A','A','A','A'],['B','C','B',"D"]], word = 'AAB'
    const res = exist(board, word)
    expect(res).toBe(true)
  })
  it('测试用例三', () => {
    const board = [["a","b"],["c","d"]], word = "abcd"
    const res = exist(board, word)
    expect(res).toBe(false)
  })
})