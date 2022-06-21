/**
 * @description 12-整数转罗马数字 test
 * @author 氧化氢
 */

import intToRoman from './index'

describe('12-整数转罗马数字', () => {
  it('个位数', () => {
    const n = 3
    const res = intToRoman(n)
    expect(res).toBe('III')
  })

  it('十位数', () => {
    const n = 19
    const res = intToRoman(n)
    expect(res).toBe('XIX')
  })

  it('百位数', () => {
    const n = 289
    const res = intToRoman(n)
    expect(res).toBe('CCLXXXIX')
  })
  it('千位数', () => {
    const n = 1999
    const res = intToRoman(n)
    expect(res).toBe('MCMXCIX')
  })
})