/**
 * @description 62-不同路径 test
 * @author 氧化氢
 */

import uniquePaths1 from "./index";
import uniquePaths2 from "./index1";

describe('62-不同路径', () => {
  it('递归不超时用例', () => {
    const m = 3, n = 7
    // 递归：
    const res1 = uniquePaths1(m, n)
    // DP：
    const res2 = uniquePaths2(m, n)
    expect(res1).toBe(28)
    expect(res2).toBe(28)
  })

  // it('递归超时用例', () => {
  //   const m = 23, n = 12
  //   const res = uniquePaths(m, n)
  //   expect(res).toBe(28)
  // })
  it('DP解决递归超时用例', () => {
    const m = 23, n = 12
    const res = uniquePaths2(m, n)
    expect(res).toBe(193536720)
  })
})