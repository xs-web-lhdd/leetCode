/**
 * @description 283-移动零 test
 * @author 氧化氢
 */

import test1 from './index'
import test2 from './index1'
import test3 from './index2'

describe('移动零', () => {
  it('正常情况下', () => {
    const nums = [0,1,0,3,12]
    const res1 = test1(nums)
    const res2 = test2(nums)
    const res3 = test3(nums)
    expect(res1).toEqual([1,3,12,0,0])
    expect(res2).toEqual([1,3,12,0,0])
    expect(res3).toEqual([1,3,12,0,0])
  })

  it('全 0 情况下', () => {
    const nums = [0,0,0]
    const res1 = test1(nums)
    const res2 = test2(nums)
    const res3 = test3(nums)
    expect(res1).toEqual([0,0,0])
    expect(res2).toEqual([0,0,0])
    expect(res3).toEqual([0,0,0])
  })

  it('全非 0 情况下', () => {
    const nums = [1,2,3,4,5]
    const res1 = test1(nums)
    const res2 = test2(nums)
    const res3 = test3(nums)
    expect(res1).toEqual([1,2,3,4,5])
    expect(res2).toEqual([1,2,3,4,5])
    expect(res3).toEqual([1,2,3,4,5])
  })
})