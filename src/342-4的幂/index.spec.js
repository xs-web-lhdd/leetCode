/**
 * @description 342-4的幂 test
 * @author 氧化氢
 */

import { isPowerOfFour } from "./index1";

describe('342-4的幂', () => {
  it('示例一', () => {
    const n = 16
    const res = isPowerOfFour(n)
    expect(res).toBe(true)
  })

  it('示例二', () => {
    const n = 5
    const res = isPowerOfFour(n)
    expect(res).toBe(false)
  })

  it('示例三', () => {
    const n = 1
    const res = isPowerOfFour(n)
    expect(res).toBe(true)
  })
})