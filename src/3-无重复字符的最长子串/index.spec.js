/**
 * @description 3. 无重复字符的最长子串
 * @author 氧化氢
 */

import lengthOfLongestSubstring from './index3'

describe('3. 无重复字符的最长子串', () => {
  test('测试用例一', () => {
    const s = 'abcabcbb'
    const res = lengthOfLongestSubstring(s)
    expect(res).toBe(3)
  })

  test('测试用例二', () => {
    const s = 'bbbbb'
    const res = lengthOfLongestSubstring(s)
    expect(res).toBe(1)
  })

  test('测试用例三', () => {
    const s = 'pwwkew'
    const res = lengthOfLongestSubstring(s)
    expect(res).toBe(3)
  })
})