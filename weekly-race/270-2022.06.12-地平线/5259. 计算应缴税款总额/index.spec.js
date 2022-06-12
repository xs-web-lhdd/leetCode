/**
 * @description 5259. 计算应缴税款总额 test
 * @author 氧化氢
 */

import calculateTax  from "./index";

describe('计算应缴税款总额', () => {
  it('示例一', () => {
    const brackets = [[3,50],[7,10],[12,25]], income = 10
    const res = calculateTax(brackets, income)
    expect(res).toBe(2.65000)
  })

  it('示例二', () => {
    const brackets = [[1,0],[4,25],[5,50]], income = 2
    const res = calculateTax(brackets, income)
    expect(res).toBe(0.25000)
  })

  it('示例三', () => {
    const brackets = [[2,50]], income = 0
    const res = calculateTax(brackets, income)
    expect(res).toBe(0.00000)
  })
})