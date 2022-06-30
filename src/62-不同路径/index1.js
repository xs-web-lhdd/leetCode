/**
 * @description 62-不同路径 动态规划 KO 解法
 * @author 氧化氢
 */

/**
 * @param {number} m
 * @param {number} n
 * @return {number}
 */
 var uniquePaths = function(m, n) {
  // 生成 2 维数组存放到达每一个位置的路径数：
  var arr = []
  for(var i = 0; i < m; i++) {
    arr.push(new Array(n).fill(0))
  }

  for(var i = 0; i < m; i++) {
    for(var j = 0; j < n; j++) {
      if(i == 0 && j == 0) arr[i][j] = 1
      else {
        // 从上面下来：
        if(i) arr[i][j] += arr[i - 1][j]
        // 从左边过来：
        if(j) arr[i][j] += arr[i][j - 1]
      }
    }
  }

  return arr[m - 1][n - 1]
};

export default uniquePaths