/**
 * @description 461-汉明距离 test
 * @author 氧化氢
 */

import { hammingDistance } from "./index1";

describe('461-汉明距离', () => {
  it('示例一', () => {
    const x = 1, y = 4
    const res = hammingDistance(x, y)
    expect(res).toBe(2)
  })

  it('示例二', () => {
    const x = 3, y = 1
    const res = hammingDistance(x, y)
    expect(res).toBe(1)
  })
})