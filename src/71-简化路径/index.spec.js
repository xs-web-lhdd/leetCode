/**
 * @description 71-简化路径 test
 * @author 氧化氢
 */

import simplifyPath from "./index";

describe('71-简化路径', () => {
  test('测试用例一', () => {
    const path = "/home/"
    expect(simplifyPath(path)).toBe('/home')
  })
  test('测试用例二', () => {
    const path = "/../"
    expect(simplifyPath(path)).toBe('/')
  })
  test('测试用例三', () => {
    const path = "/home//foo/"
    expect(simplifyPath(path)).toBe('/home/foo')
  })
})