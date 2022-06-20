/**
 * @description 7-整数反转 test
 * @author 氧化氢
 */

import reverse from "./index";

describe('7-整数反转', () => {
  it('正数', () => {
    const n = 123
    const res = reverse(n)
    expect(res).toBe(321)
  })

  it('负数', () => {
    const n = -123
    const res = reverse(n)
    expect(res).toBe(-321)
  })

  it('零', () => {
    const n = 0
    const res = reverse(n)
    expect(res).toBe(0)
  })

  it('大于 2**31-1', () => {
    const n = 1534236469
    const res = reverse(n)
    expect(res).toBe(0)
  })

  it('小于 -2**31', () => {
    const n = -1534236469
    const res = reverse(n)
    expect(res).toBe(0)
  })
})