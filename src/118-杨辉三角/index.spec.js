/**
 * @description 118-杨辉三角 test
 * @author 氧化氢
 */

import generate from "./index";

describe('118-杨辉三角', () => {
  it('测试用例一', () => {
    const n = 1
    const res = generate(n)
    expect(res).toEqual([[1]])
  })

  it('测试用例二', () => {
    const n = 5
    const res = generate(n)
    expect(res).toEqual([[1],[1,1],[1,2,1],[1,3,3,1],[1,4,6,4,1]])
  })

  it('测试用例三', () => {
    const n = 7
    const res = generate(n)
    expect(res).toEqual([[1],[1,1],[1,2,1],[1,3,3,1],[1,4,6,4,1],[1,5,10,10,5,1],[1,6,15,20,15,6,1]])
  })
})