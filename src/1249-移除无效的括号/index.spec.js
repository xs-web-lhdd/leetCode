/**
 * @description 1249 移除无效的括号 test
 * @author 氧化氢
 */

import minRemoveToMakeValid from "./index";

describe('1249-移除无效的括号', () => {
  test('测试用例一', () => {
    const s = "lee(t(c)o)de)"
    expect(minRemoveToMakeValid(s)).toBe("lee(t(c)o)de")
  })
  test('测试用例二', () => {
    const s = "a)b(c)d"
    expect(minRemoveToMakeValid(s)).toBe("ab(c)d")
  })
  test('测试用例三', () => {
    const s = "))(("
    expect(minRemoveToMakeValid(s)).toBe("")
  })
})