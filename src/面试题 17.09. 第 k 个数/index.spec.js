/**
 * @description 面试题 17.09. 第 k 个数
 * @author 氧化氢
 */

import getKthMagicNumber from "./index";

describe('面试题 17.09. 第 k 个数', () => {
  test('测试用例一', () => {
    const k = 5
    expect(getKthMagicNumber(k)).toBe(9)
  })
  test('测试用例一', () => {
    const k = 3
    expect(getKthMagicNumber(k)).toBe(5)
  })
})