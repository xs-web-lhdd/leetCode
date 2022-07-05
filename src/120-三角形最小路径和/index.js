/**
 * @description 120-三角形最小路径和
 * @author 氧化氢
 */

/**
 * @param {number[][]} triangle
 * @return {number}
 */
 var minimumTotal = function(triangle) {
  var length = triangle.length
  var lastLayer = triangle[triangle.length - 1].slice()
  
  var arr = []
  for(var i = 0; i < length; i++) {
      arr.push(new Array(triangle[i].length).fill(0))
  }
  arr.pop()
  arr.push(lastLayer)

  for(var i = length - 2; i >= 0; i--) {
      for(var j = 0; j <= i; j++) {
          arr[i][j] = Math.min(arr[i+1][j], arr[i+1][j+1]) + triangle[i][j]
      }
  }

  return arr[0][0]
};

export default minimumTotal