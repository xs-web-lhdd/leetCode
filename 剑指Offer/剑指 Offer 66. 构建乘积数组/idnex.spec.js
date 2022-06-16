/**
 * @description 剑指 Offer 66. 构建乘积数组 test
 * @author 氧化氢
 */


import constructArr from "./index";

describe('剑指 Offer 66. 构建乘积数组', () => {
  it('示例一', () => {
    const a = [1,2,3,4,5]
    const res = constructArr(a)
    expect(res).toEqual([120,60,40,30,24])
  })
})