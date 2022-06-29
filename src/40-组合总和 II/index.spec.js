/**
 * @description 40-组合总和 II test
 * @author 氧化氢
 */

import combinationSum2 from "./index";

describe('40-组合总和 II', () => {
  it('测试用例一', () => {
    const candidates = [2,5,2,1,2], target = 5
    const res = combinationSum2(candidates, target)
    expect(res).toEqual([["1","2","2"],["5"]])})

  // it('超时用例', () => {
  //   const candidates = [1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1], target = 27
  // })
})