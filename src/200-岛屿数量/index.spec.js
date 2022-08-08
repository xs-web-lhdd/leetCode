/**
 * @description 200-岛屿数量 test
 * @author 氧化氢
 */

import numIslands from './index';

describe('200-岛屿数量', () => {
  test('测试用例一', () => {
    const grid = [
      ["1", "1", "1", "1", "0"],
      ["1", "1", "0", "1", "0"],
      ["1", "1", "0", "0", "0"],
      ["0", "0", "0", "0", "0"]
    ]
    const res = numIslands(grid)
    expect(res).toBe(1)
  })
  test('测试用例一', () => {
    const grid = [
      ["1", "1", "0", "0", "0"],
      ["1", "1", "0", "0", "0"],
      ["0", "0", "1", "0", "0"],
      ["0", "0", "0", "1", "1"]
    ]
    const res = numIslands(grid)
    expect(res).toBe(3)
  })
})