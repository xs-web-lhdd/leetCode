/**
 * @description 304-二维区域和检索 - 矩阵不可变
 * @author 氧化氢
 */

/**
 * @param {number[][]} matrix
 */
 var NumMatrix = function(matrix) {
  this.preArr = []
  for(var i = 0;  i < matrix.length; i++) {
      var arr = [0]
      for(var j = 0; j < matrix[i].length; j++) {
          arr[j+1] = arr[j] + matrix[i][j]
      }
      this.preArr.push(arr)
  }
};

/** 
* @param {number} row1 
* @param {number} col1 
* @param {number} row2 
* @param {number} col2
* @return {number}
*/
NumMatrix.prototype.sumRegion = function(row1, col1, row2, col2) {
  var ans = 0
  for(var i = row1; i <= row2; i++) {
      ans += (this.preArr[i][col2+1] - this.preArr[i][col1])
  }

  return ans
};

/**
* Your NumMatrix object will be instantiated and called as such:
* var obj = new NumMatrix(matrix)
* var param_1 = obj.sumRegion(row1,col1,row2,col2)
*/

export default NumMatrix