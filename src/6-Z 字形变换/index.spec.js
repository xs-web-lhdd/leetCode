/**
 * @description 6-Z 字形变换 test
 * @author 氧化氢
 */

import convert from "./index";

describe('6-Z 字形变换', () => {
  it('多行情况', () => {
    const s = "PAYPALISHIRING", numRows = 3
    const res = convert(s, numRows)
    expect(res).toBe("PAHNAPLSIIGYIR")
  })

  it('一行情况', () => {
    const s = 'ABC', numRows = 1
    const res = convert(s, numRows)
    expect(res).toBe('ABC')
  })
})