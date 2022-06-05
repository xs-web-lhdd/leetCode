/**
 * @description 240. 搜索二维矩阵 II  优化版
 * @author 氧化氢
 */

/**
 * @param {number[][]} matrix
 * @param {number} target
 * @return {boolean}
 */
 var searchMatrix = function(matrix, target) {
  let i = matrix.length - 1, j = 0;
  while (i >= 0 && j < matrix[0].length) {
      if (target < matrix[i][j]) i--;
      else if (target > matrix[i][j]) j++;
      else return true;
  }
  
  return false;
};