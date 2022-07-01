/**
 * @description 63-不同路径 II
 * @author 氧化氢
 */

/**
 * @param {number[][]} obstacleGrid
 * @return {number}
 */
 var uniquePathsWithObstacles = function(obstacleGrid) {
  // 生成 2 维数组存放到达每一个位置的路径数：
  var m = obstacleGrid.length
  var n = obstacleGrid[0].length
  var arr = []
  for(var i = 0; i < m; i++) {
    arr.push(new Array(n).fill(0))
  }

  for(var i = 0; i < m; i++) {
    for(var j = 0; j < n; j++) {
      if(!obstacleGrid[i][j]) {
        if(i == 0 && j == 0) {
          // 石头在 0 0 位置，直接无路可走，返回 0
          if(obstacleGrid[0][0]) return 0
          // 初始化起点位置：   
          else arr[i][j] = 1
        }
        else {
          // 从上面下来：
          if(i) arr[i][j] += arr[i - 1][j]
          // 从左边过来：
          if(j) arr[i][j] += arr[i][j - 1]
        }
      }
    }
  }

    console.log(arr)

  return arr[m - 1][n - 1]
};

export default uniquePathsWithObstacles