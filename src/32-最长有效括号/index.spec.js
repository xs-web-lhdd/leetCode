/**
 * @description 32-最长有效括号 test
 * @author 氧化氢
 */

import longestValidParentheses from "./index";

describe('32-最长有效括号', () => {
  it('测试用例一', () => {
    const n = "(()"
    const res = longestValidParentheses(n)
    expect(res).toBe(2)
  })

  it('测试用例二', () => {
    const n = ")()())"
    const res = longestValidParentheses(n)
    expect(res).toBe(4)
  })

  it('测试用例三', () => {
    const n = ""
    const res = longestValidParentheses(n)
    expect(res).toBe(0)
  })
})