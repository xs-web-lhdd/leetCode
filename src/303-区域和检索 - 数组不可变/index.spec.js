/**
 * @description 303-区域和检索 - 数组不可变 test
 * @author 氧化氢
 */

import NumArray from "./index";

describe('303-区域和检索', () => {
  it('测试用例一', () => {
    const arr = [-2, 0, 3, -5, 2, -1]
    const test1 = [0, 2]
    const test2 = [2, 5]
    const test3 = [0, 5]
    const obj = new NumArray(arr)
    const res1 = obj.sumRange(...test1)
    const res2 = obj.sumRange(...test2)
    const res3 = obj.sumRange(...test3)
    expect(res1).toBe(1)
    expect(res2).toBe(-1)
    expect(res3).toBe(-3)
  })
})