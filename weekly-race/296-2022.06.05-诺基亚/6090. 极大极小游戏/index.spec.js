/**
 * @description 6090. 极大极小游戏 test
 * @author 氧化氢
 */

import minMaxGame  from "./index";

describe('6090. 极大极小游戏', () => {
  it('测试用例 1', () => {
    const nums = [1,3,5,2,4,8,2,2]
    const res = minMaxGame(nums)
    expect(res).toBe(1)
  })

  it('测试用例 2', () => {
    const nums = [3]
    const res = minMaxGame(nums)
    expect(res).toBe(3)
  })
})