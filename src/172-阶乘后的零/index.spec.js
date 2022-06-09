/**
 * @description 172-阶乘后的零 test
 * @author 氧化氢
 */

import trailingZeroes from "./index";


describe('172-阶乘后的零', () => {
  it('示例一', () => {
    var n = 3
    var res = trailingZeroes(n)
    expect(res).toBe(0)
  })

  it('示例二', () => {
    var n = 5
    var res = trailingZeroes(n)
    expect(res).toBe(1)
  })

  it('示例三', () => {
    var n = 0
    var res = trailingZeroes(n)
    expect(res).toBe(0)
  })
})