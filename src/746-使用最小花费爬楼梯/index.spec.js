/**
 * @description 746-使用最小花费爬楼梯 test
 * @author 氧化氢
 */

import minCostClimbingStairs from "./index1";

describe('746-使用最小花费爬楼梯', () => {
  it('测试用例一', () => {
    const cost = [10,15,20]
    const res = minCostClimbingStairs(cost)
    expect(res).toBe(15)
  })

  it('测试用例二', () => {
    const cost = [1,100,1,1,1,100,1,1,100,1]
    const res = minCostClimbingStairs(cost)
    expect(res).toBe(6)
  })
})