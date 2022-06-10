/**
 * @description 136-只出现一次的数字 test
 * @author 氧化氢
 */

import { singleNumber } from "./index";

describe('136-只出现一次的数字', () => {
  it('示例一', () => {
    const arr = [2,2,1]
    const res = singleNumber(arr)
    expect(res).toBe(1)
  })

  it('示例二', () => {
    const arr = [4,1,2,1,2]
    const res = singleNumber(arr)
    expect(res).toBe(4)
  })
})