/**
 * @description 682 棒球比赛 test
 * @author 氧化氢
 */

import calPoints from "./index";

describe('682-棒球比赛', () => {
  test('测试用例一', () => {
    const ops = ["5", "2", "C", "D", "+"]
    expect(calPoints(ops)).toBe(30)
  })
  test('测试用例一', () => {
    const ops = ["5", "-2", "4", "C", "D", "9", "+", "+"]
    expect(calPoints(ops)).toBe(27)
  })
  test('测试用例一', () => {
    const ops = ["1"]
    expect(calPoints(ops)).toBe(1)
  })
})