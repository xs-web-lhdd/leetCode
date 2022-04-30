/**
 * @description 74-搜索二维矩阵
 * @author 氧化氢
 */

/**
 * @param {number[][]} matrix
 * @param {number} target
 * @return {boolean}
 * @method 240 很像
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

/**
 * @param {number[][]} matrix
 * @param {number} target
 * @return {boolean}
 * @method 常规写法
 */
 var searchMatrix = function(matrix, target) {
  var arr =  []
  for(var i = 0; i < matrix.length; i++) arr = arr.concat(matrix[i])

  return arr.includes(target)
};