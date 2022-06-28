/**
 * @description 119-杨辉三角 II test
 * @author 氧化氢
 */

import getRow from "./index";

describe('119-杨辉三角 II', () => {
  it('边界情况一', () => {
    const rowIndex = 0
    const res = getRow(rowIndex)
    expect(res).toEqual([1])
  })

  it('边界情况二', () => {
    const rowIndex = 1
    const res = getRow(rowIndex)
    expect(res).toEqual([1,1])
  })

  it('测试用例三', () => {
    const rowIndex = 3
    const res = getRow(rowIndex)
    expect(res).toEqual([1,3,3,1])
  })
})