/**
 * @description 621 任务调度器 test
 * @author 氧化氢
 */

import leastInterval from "./index";

describe('621-任务调度器', () => {
  test('测试用例一', () => {
    const tasks = ["A", "A", "A", "B", "B", "B"],
      n = 2
    const res = leastInterval(tasks, n)
    expect(res).toBe(8)
  })
  test('测试用例一', () => {
    const tasks = ["A", "A", "A", "A", "A", "A", "B", "C", "D", "E", "F", "G"],
      n = 2
    const res = leastInterval(tasks, n)
    expect(res).toBe(16)
  })
})