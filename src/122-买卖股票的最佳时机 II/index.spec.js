/**
 * @description 122-买卖股票的最佳时机 II test
 * @author 氧化氢
 */

import maxProfit from './index'

describe('122-买卖股票的最佳时机 II', () => {
  it('股价有跌有浮', () => {
    const prices = [7,1,5,3,6,4]
    const res = maxProfit(prices)
    expect(res).toBe(7)
  })

  it('股价只浮不跌', () => {
    const prices = [1,2,3,4,5]
    const res = maxProfit(prices)
    expect(res).toBe(4)
  })

  it('股价只跌不浮', () => {
    const prices = [6,5,4,3,2,1]
    const res = maxProfit(prices)
    expect(res).toBe(0)
  })
})