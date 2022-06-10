/**
 * @description 693-交替位二进制数 test
 * @author 氧化氢
 */

import { hasAlternatingBits } from './index'

describe('693-交替位二进制数', () => {
  it('示例一', () => {
    const n = 5
    const res = hasAlternatingBits(n)
    expect(res).toBe(true)
  })

  it('示例一', () => {
    const n = 7
    const res = hasAlternatingBits(n)
    expect(res).toBe(false)
  })

  it('示例一', () => {
    const n = 11
    const res = hasAlternatingBits(n)
    expect(res).toBe(false)
  })
})