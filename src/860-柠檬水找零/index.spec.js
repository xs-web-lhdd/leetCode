/**
 * @description 860 柠檬水找零 test
 * @author 氧化氢
 */

import lemonadeChangefrom from "./index";

describe("860-柠檬水找零", () => {
  test('有 5 元可找10的情况', () => {
    const bills = [5, 5, 10]
    const res = lemonadeChangefrom(bills)
    expect(res).toBe(true)
  })
  test('没有 5 元可找10的情况', () => {
    const bills = [10]
    const res = lemonadeChangefrom(bills)
    expect(res).toBe(false)
  })
  test('有 5 元 10 元可找20的情况', () => {
    const bills = [5, 5, 5, 10, 20]
    const res = lemonadeChangefrom(bills)
    expect(res).toBe(true)
  })
  test('只有 5 元可找20的情况', () => {
    const bills = [5, 5, 5, 20]
    const res = lemonadeChangefrom(bills)
    expect(res).toBe(true)
  })
  test('没钱可找20的情况', () => {
    const bills = [5, 5, 20]
    const res = lemonadeChangefrom(bills)
    expect(res).toBe(false)
  })
})