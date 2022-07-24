/**
 * @description 859-亲密字符串 test
 * @author 氧化氢
 */

import buddyStrings from "./index2";

describe('859-亲密字符串', () => {
  test('s和goal长度不等的情况', () => {
    const s = "abc",
      goal = "ba"
    const res = buddyStrings(s, goal)
    expect(res).toBe(false)
  })
  test('s和goal有两个字母交换的情况', () => {
    const s = "ab",
      goal = "ba"
    const res = buddyStrings(s, goal)
    expect(res).toBe(true)
  })
  test('s和goal有多个字母交换的情况', () => {
    const s = "abcd",
      goal = "badc"
    const res = buddyStrings(s, goal)
    expect(res).toBe(false)
  })
  test('s和goal相等的情况', () => {
    const s = "ab",
      goal = "ab"
    const res = buddyStrings(s, goal)
    expect(res).toBe(false)
  })
  test('s和goal相等且重复的情况', () => {
    const s = "aa",
      goal = "aa"
    const res = buddyStrings(s, goal)
    expect(res).toBe(true)
  })
})