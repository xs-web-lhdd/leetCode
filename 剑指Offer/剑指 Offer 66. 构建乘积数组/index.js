/**
 * @description 剑指 Offer 66. 构建乘积数组
 * @author 氧化氢
 */

/**
 * @param {number[]} a
 * @return {number[]}
 */
 var constructArr = function(a) {
  var preArr = [1]
  for(var i = 1; i <= a.length; i++) {
      preArr[i] = preArr[i-1] * a[i-1]
  }
  
  var aftArr = [1]
  var b = a.reverse()
  for(var i = 1; i <= b.length; i++) {
      aftArr[i] = aftArr[i-1] * b[i-1]
  }
  
  var ans = []
  for(var i = 0; i < a.length; i++) {
      ans[i] = preArr[i] * aftArr[a.length-i-1]
  }

  return ans
};

export default constructArr