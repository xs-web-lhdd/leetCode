/**
 * @deprecated 70 爬楼梯
 * @author 氧化氢
 */

/**
 * @param {number} n
 * @return {number}
 */
 var climbStairs = function(n) {
  var arr = []
  arr[0] = 1
  arr[1] = 1
  for(var i = 2; i <= n; i++) {
      arr[i] = arr[i-1] + arr[i-2] 
  }

  return arr[n]
};