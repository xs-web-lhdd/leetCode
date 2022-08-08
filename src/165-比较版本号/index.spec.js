/**
 * @description 165-比较版本号 test
 * @author 氧化氢
 */

import compareVersion from "./index";

describe('165-比较版本号', () => {
  test('测试用例一', () => {
    const version1 = "1.01",
      version2 = "1.001"
    expect(compareVersion(version1, version2)).toBe(0)
  })
  test('测试用例二', () => {
    const version1 = "1.0",
      version2 = "1.0.0"
    expect(compareVersion(version1, version2)).toBe(0)
  })
  test('测试用例三', () => {
    const version1 = "0.1",
      version2 = "1.1"
    expect(compareVersion(version1, version2)).toBe(-1)
  })
})