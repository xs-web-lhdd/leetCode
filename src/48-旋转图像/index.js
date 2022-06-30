/**
 * @description 48-旋转图像
 * @author 氧化氢
 */

/**
 * @param {number[][]} matrix
 * @return {void} Do not return anything, modify matrix in-place instead.
 */
 var rotate = function(matrix) {
  var length = matrix.length
  var size = matrix[0].length
  // 先沿对角线翻转：
  for(var i = 0; i < length; i++) {
    for(var j = 0; j < i; j++) {
      swap(matrix, i, j)
    }
  }
  // 再沿着中轴反转：
  for(var i = 0; i < length; i++) {
    for(var j = 0; j < Math.floor(size / 2); j++) {
      swap(matrix, i, j, size)
    }
  }

  return matrix
};


function swap(arr, i, j, size) {
  if(typeof size === "undefined") {
    var temp = arr[i][j]
    arr[i][j] = arr[j][i]
    arr[j][i] = temp
  }else {
    var temp = arr[i][j]
    arr[i][j] = arr[i][size-j-1]
    arr[i][size-j-1] = temp
  }
}

export default rotate