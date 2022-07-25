/**
 * @description 946 验证栈序列 test
 * @author 氧化氢
 */

import validateStackSequences from "./index";

describe('946-验证栈序列', () => {
  test('测试用例一', () => {
    const pushed = [1, 2, 3, 4, 5],
      popped = [4, 5, 3, 2, 1]
    expect(validateStackSequences(pushed, popped)).toBe(true)
  })
  test('测试用例一', () => {
    const pushed = [1, 2, 3, 4, 5],
      popped = [4, 3, 5, 1, 2]
    expect(validateStackSequences(pushed, popped)).toBe(false)
  })
})