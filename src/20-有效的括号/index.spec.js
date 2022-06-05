/**
 * @description 20-有效的括号 test
 * @author 氧化氢
 */

import isValid from './index'

describe('有效的括号', () => {
  it('正常情况', () => {
    const str = '{{(())}}'
    const res = isValid(str)
    expect(res).toBe(true)
  })

  it('异常情况', () => {
    const str = '([)]'
    const res = isValid(str)
    expect(res).toBe(false)
  })
})