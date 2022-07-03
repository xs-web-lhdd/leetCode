/**
 * @description 91-解码方法 test
 * @author 氧化氢
 */

import numDecodings from "./index";

describe('91-解码方法', () => {
  it('测试用例一', () => {
    const s = "12"
    const res = numDecodings(s)
    expect(res).toBe(2)
  })

  it('测试用例一', () => {
    const s = "112"
    const res = numDecodings(s)
    expect(res).toBe(3)
  })
})