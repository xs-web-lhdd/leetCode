/**
 * @description 剑指 Offer 04. 二维数组中的查找
 * @author 氧化氢
 */

/**
 * @param {number[][]} matrix
 * @param {number} target
 * @return {boolean}
 */
 var findNumberIn2DArray = function(matrix, target) {
  var i = matrix.length - 1, j = 0
  while(i >= 0 && j < matrix[0].length) {
    if(target > matrix[i][j]) j++
    else if(target < matrix[i][j]) i--
    else return true
  }

  return false
};


export {
  findNumberIn2DArray
}