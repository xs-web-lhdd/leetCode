/**
 * @description 844 比较含退格的字符串 test
 * @author 氧化氢
 */

import backspaceCompare from "./index";

describe('844-比较含退格的字符串', () => {
  test('测试用例一', () => {
    const s = "ab#c",
      t = "ad#c"
    expect(backspaceCompare(s, t)).toBe(true)
  })
  test('测试用例二', () => {
    const s = "ab##",
      t = "c#d#"
    expect(backspaceCompare(s, t)).toBe(true)
  })
  test('测试用例三', () => {
    const s = "a#c",
      t = "b"
    expect(backspaceCompare(s, t)).toBe(false)
  })
})