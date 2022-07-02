/**
 * @description 73-矩阵置零
 * @author 氧化氢
 */

/**
 * @param {number[][]} matrix
 * @return {void} Do not return anything, modify matrix in-place instead.
 */
 var setZeroes = function(matrix) {
  var m = matrix.length
  var n = matrix[0].length

  // 将原数组中值为 0 的 横坐标放到 x 数组里面，纵坐标放到 y 数组里面：
  var x = []
  var y = []
  for(var i = 0; i < m; i++) {
    for(var j = 0; j < n; j++) {
      if(!matrix[i][j]) {
        x.push(i)
        y.push(j)
      }
    }
  }

  // 将 x 数组里面的行全部置 0
  for(var i = 0; i < m; i++) {
    if(x.includes(i)) {
      for(var j = 0; j < n; j++) {
        matrix[i][j] = 0
      }
    }
  }
  // 将 y 数组里面的行全部置 0
  for(var j = 0; j < n; j++) {
    if(y.includes(j)) {
      for(var i = 0; i < m; i++) {
        matrix[i][j] = 0
      }
    }
  }

  return matrix
};

export default setZeroes