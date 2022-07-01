/**
 * @description 64-最小路径和
 * @author 氧化氢
 */

/**
 * @param {number[][]} grid
 * @return {number}
 */
 var minPathSum = function(grid) {
  var m = grid.length
  var n = grid[0].length
  var arr =  []
  for(var i = 0; i < m; i++) {
    arr.push(new Array(n).fill(Infinity))
  }

  for(var i = 0; i < m; i++) {
    for(var j = 0; j < n; j++) {
      if(i === 0 && j === 0) {
        arr[i][j] = grid[i][j]
      }
      else {
        if(i) arr[i][j] = Math.min(arr[i][j], arr[i-1][j] + grid[i][j])
        if(j) arr[i][j] = Math.min(arr[i][j], arr[i][j-1] + grid[i][j])
      }
    }
  }

  return arr[m-1][n-1]
};

export default minPathSum