/**
 * @description 1446-连续字符 test
 * @author 氧化氢
 */

import maxPower from './index'

describe('1446-连续字符', () => {
  it('正常情况一', () => {
    const s = "leetcode"
    const res = maxPower(s)
    expect(res).toBe(2)
  })

  it('正常情况二', () => {
    const s = "abbcccddddeeeeedcba"
    const res = maxPower(s)
    expect(res).toBe(5)
  })

  it('空字符串', () => {
    const s = ""
    const res = maxPower(s)
    expect(res).toBe(0)
  })

  it('无连续字符串', () => {
    const s = "abcdefghijk"
    const res = maxPower(s)
    expect(res).toBe(1)
  })
})