/**
 * @description 322-零钱兑换 test
 * @author 氧化氢
 */

import coinChange from "./index";

describe('322-零钱兑换', () => {
  it('', () => {
    const coins = [1, 2, 5], amount = 11
    const res = coinChange(coins, amount)
    expect(res).toBe(3)
  })

  it('', () => {
    const coins = [2], amount = 3
    const res = coinChange(coins, amount)
    expect(res).toBe(-1)
  })

  it('', () => {
    const coins = [2], amount = 0
    const res = coinChange(coins, amount)
    expect(res).toBe(0)
  })
})