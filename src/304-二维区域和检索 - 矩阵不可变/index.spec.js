/**
 * @description 304-二维区域和检索 - 矩阵不可变 test
 * @author 氧化氢
 */

import NumMatrix from "./index";

describe('304-二维区域和检索 - 矩阵不可变', () => {
  it('测试用例一', () => {
    const arr = [[3,0,1,4,2],[5,6,3,2,1],[1,2,0,1,5],[4,1,0,1,7],[1,0,3,0,5]]
    const test1 = [2, 1, 4, 3]
    const test2 = [1, 1, 2, 2]
    const test3 = [1, 2, 2, 4]
    const obj = new NumMatrix(arr)
    const res1 = obj.sumRegion(...test1)
    const res2 = obj.sumRegion(...test2)
    const res3 = obj.sumRegion(...test3)
    expect(res1).toBe(8)
    expect(res2).toBe(11)
    expect(res3).toBe(12)
  })
})