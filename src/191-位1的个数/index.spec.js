/**
 * @description 191-位1的个数 test
 * @author 氧化氢
 */

import { hammingWeight } from './index'
import { hammingWeightTwo } from './index1'

describe('191-位1的个数', () => {
  it('示例一', () => {
    const n = 11 // 00000000000000000000000000001011
    const resOne = hammingWeight(n)
    const resTwo = hammingWeightTwo(n)
    expect(resOne).toBe(3)
    expect(resTwo).toBe(3)
  })

  it('示例二', () => {
    const n = 128 // 00000000000000000000000010000000
    const resOne = hammingWeight(n)
    const resTwo = hammingWeightTwo(n)
    expect(resOne).toBe(1)
    expect(resTwo).toBe(1)
  })

  it('示例三', () => {
    const n = 129 // 00000000000000000000000010000001
    const resOne = hammingWeight(n)
    const resTwo = hammingWeightTwo(n)
    expect(resOne).toBe(2)
    expect(resTwo).toBe(2)
  })
})