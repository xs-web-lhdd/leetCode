/**
 * @description 面试题 16.01. 交换数字 test
 * @author 氧化氢
 */

import { swapNumbers } from "./index";

describe('面试题 16.01. 交换数字', () => {
  it('示例一', () => {
    const numbers = [1,2]
    const res = swapNumbers(numbers)
    expect(res).toEqual([2,1])
  })

  it('示例二', () => {
    const numbers = [333333,222222]
    const res = swapNumbers(numbers)
    expect(res).toEqual([222222,333333])
  })
})