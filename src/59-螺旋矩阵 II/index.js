/**
 * @description 59-螺旋矩阵 II
 * @author 氧化氢
 */

/**
 * @param {number} n
 * @return {number[][]}
 */
 var generateMatrix = function(n) {
  var length = n
  var size = n
  // arr 是标志数组，走过了就不走了，matrix 是最终返回数组
  var arr = [], matrix = []
  for(var i = 0; i < length; i++) {
    arr.push(new Array(size).fill(0))
    matrix.push(new Array(size))
  }

  var direction = 'right'
  // 从 k = 1 开始计数，每次往里面放 k 直到 n 方 为止
  var i = 0, j = 0, max = n * n, k = 1
  matrix[i][j] = 1
  arr[i][j] = 1
  while(k < max) {
    if(direction === 'right') {
      if(j < size - 1) {
        if(!arr[i][j+1]) j++
        else {
          direction = 'down'
          i++
        }
      }
      else if(j === size - 1) {
        direction = 'down'
        i++
      }
    }
    else if(direction === 'down') {
      if(i < length - 1) {
        if(!arr[i+1][j]) i++
        else {
          direction = 'left'
          j--
        }
      }
      else if(i === length - 1) {
        direction = 'left'
        j--
      }
    }
    else if(direction === 'left') {
      if(j > 0) {
        if(!arr[i][j-1]) j--
        else {
          direction = 'up',
          i--
        }
      }
      else if(j === 0) {
        direction = 'up'
        i--
      }
    }
    else if(direction === 'up') {
      if(i > 0) {
        if(!arr[i-1][j]) i--
        else {
          direction = 'right',
          j++
        }
      }
    }
    k++
    matrix[i][j] = k
    arr[i][j] = 1
  }

  
  return matrix
};

export default generateMatrix