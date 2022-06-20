/**
 * @description 8-字符串转换整数 (atoi) test
 * @author 氧化氢
 */

import myAtoi from './index'

describe('8-字符串转换整数', () => {
  it('正常情况下', () => {
    const n = '42'
    const res = myAtoi(n)
    expect(res).toBe(42)
  })

  it('带一个符合的情况', () => {
    const n = '-42'
    const res = myAtoi(n)
    expect(res).toBe(-42)
  })

  it('带两个符合的情况', () => {
    const n = '-4+2'
    const res = myAtoi(n)
    expect(res).toBe(-4)
  })

  it('带两个空格的情况', () => {
    const n = '       -4+2'
    const res = myAtoi(n)
    expect(res).toBe(-4)
  })

  it('带字母的情况', () => {
    const n = "4193 with words"
    const res = myAtoi(n)
    expect(res).toBe(4193)
  })

  it('带前缀0的情况', () => {
    const n = "  +00001k4"
    const res = myAtoi(n)
    expect(res).toBe(1)
  })

  it('分割完为空串情况', () => {
    const n = "  -0k4"
    const res = myAtoi(n)
    expect(res).toBe(0)
  })
})