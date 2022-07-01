/**
 * @description 63-不同路径 II test
 * @author 氧化氢
 */

import uniquePathsWithObstacles from "./index";

describe('63-不同路径 II', () => {
  it('测试用例一', () => {
    const obstacleGrid = [[0,0,0],[0,1,0],[0,0,0]]
    const res = uniquePathsWithObstacles(obstacleGrid)
    expect(res).toBe(2)
  })

  it('测试用例二', () => {
    const obstacleGrid = [[0,1],[0,0]]
    const res = uniquePathsWithObstacles(obstacleGrid)
    expect(res).toBe(1)
  })
})