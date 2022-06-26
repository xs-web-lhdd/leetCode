/**
 * @description 64-最小路径和
 * @author 氧化氢
 */

/**
 * @param {number[][]} grid
 * @return {number}
 * @solution 本题用递归思路写法都没问题，但是会爆栈！！！
 */
 var minPathSum = function(grid) {
  var length = grid.length
  var size = grid[0].length
  var arr = []
  path(grid[0][0], 0, 0, grid, length, size, arr)

  console.log(arr)

  return Math.min(...arr)
};

function path(sum, i, j, grid, length, size, arr) {
  if(i < length - 1 && j < size - 1) {
      // 可以往右，可以往下
      path(sum + grid[i+1][j], i+1, j, grid, length, size, arr)
      path(sum + grid[i][j+1], i, j+1, grid, length, size, arr)
  }
  else if(i < length - 1 && (j === size - 1)) {
      // 可以往下
      path(sum + grid[i+1][j], i+1, j, grid, length, size, arr)
  }
  else if((i === length - 1) && j < size - 1) {
      // 可以往右
      path(sum + grid[i][j+1], i, j+1, grid, length, size, arr)
  }
  else if(i === length - 1 && j === size - 1) {
      // 到达末尾
      arr.push(sum)

      return
  }
}