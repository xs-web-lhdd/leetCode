/**
 * @description 395-至少有 K 个重复字符的最长子串 test
 * @author 氧化氢
 */

import { longestSubstringOne } from './index'
import { longestSubstringTwo } from './index1'

describe('395-至少有 K 个重复字符的最长子串', () => {
  it('测试用例1', () => {
    var s = "aaabb", k = 3
    var resOne = longestSubstringOne(s, k)
    var resTwo = longestSubstringTwo(s, k)
    expect(resOne).toBe(3)
    expect(resTwo).toBe(3)
  })

  it('测试用例2', () => {
    var s = "ababbc", k = 2
    var resOne = longestSubstringOne(s, k)
    var resTwo = longestSubstringTwo(s, k)
    expect(resOne).toBe(5)
    expect(resTwo).toBe(5)
  })
})


