/**
 * @description 240. 搜索二维矩阵 II
 * @author 氧化氢
 */

/**
 * @param {number[][]} matrix
 * @param {number} target
 * @return {boolean}
 */
 var searchMatrix = function(matrix, target) {
  var depositIndex = [], arr = []
  matrix.forEach((item, index) => {
      if(item[0] <= target) depositIndex.push(index)
  })
  depositIndex.forEach(item => {
      if(matrix[item][matrix[item].length-1] >= target) {
          arr.push(item)
      }
  })

  var item;
  for(var i = 0; i < arr.length; i++) {
      item = matrix[arr[i]]
      for(var j = 0; j < item.length; j++) {
          if(item[j] === target) return true
      }
  }

  return false
};