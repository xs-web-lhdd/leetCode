/**
 * @description 48-旋转图像 test
 * @author 氧化氢
 */

import rotate from "./index";

describe('48-旋转图像', () => {
  it('奇数列旋转', () => {
    const matrix = [[1,2,3],[4,5,6],[7,8,9]]
    const res = rotate(matrix)
    expect(res).toEqual([[7,4,1],[8,5,2],[9,6,3]])
  })

  it('偶数列旋转', () => {
    const matrix = [[5,1,9,11],[2,4,8,10],[13,3,6,7],[15,14,12,16]]
    const res = rotate(matrix)
    expect(res).toEqual([[15,13,2,5],[14,3,4,1],[12,6,8,9],[16,7,10,11]])
  })
})