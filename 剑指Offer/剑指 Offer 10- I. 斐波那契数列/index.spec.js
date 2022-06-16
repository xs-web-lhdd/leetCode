/**
 * @description 剑指 Offer 10- I. 斐波那契数列 test
 * @author 氧化氢
 */

import fib from "./index";

describe('剑指 Offer 10- I. 斐波那契数列', () => {
  it('示例一', () => {
    const n = 2
    const res = fib(n)
    expect(res).toEqual(BigInt(1))
  })

  it('实例二', () => {
    const n = 5
    const res = fib(n)
    expect(res).toEqual(BigInt(5))
  })

  it('实例三', () => {
    const n = 60
    const res = fib(n)
    expect(res).toEqual(BigInt(8745084))
  })
})