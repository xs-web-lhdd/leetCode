/**
 * @description 636 函数的独占时间 test
 * @author 氧化氢
 */

import exclusiveTime from "./index";

describe('636-函数的独占时间', () => {
  test('测试用例一', () => {
    const n = 2,
      logs = ["0:start:0", "1:start:2", "1:end:5", "0:end:6"]
    const res = exclusiveTime(n, logs)
    expect(res).toEqual([3, 4])
  })
  test('测试用例二', () => {
    const n = 1,
      logs = ["0:start:0", "0:start:2", "0:end:5", "0:start:6", "0:end:6", "0:end:7"]
    const res = exclusiveTime(n, logs)
    expect(res).toEqual([8])
  })
  test('测试用例三', () => {
    const n = 2,
      logs = ["0:start:0", "0:start:2", "0:end:5", "1:start:6", "1:end:6", "0:end:7"]
    const res = exclusiveTime(n, logs)
    expect(res).toEqual([7, 1])
  })
})