/**
 * @description 13-罗马数字转整数 test
 * @author 氧化氢
 */

import romanToInt from "./index";

describe('13-罗马数字转整数', () => {
  it('不含罗马数字 4 或 9', () => {
    const n = 'IIII'
    const res = romanToInt(n)
    expect(res).toBe(4)
  })

  it('包含罗马数字 4', () => {
    const n = 'MMDCXLIX'
    const res = romanToInt(n)
    expect(res).toBe(2649)
  })
})