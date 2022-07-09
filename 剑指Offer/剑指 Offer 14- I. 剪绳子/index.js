/**
 * @descripton 剑指 Offer 14- I. 剪绳子
 * @author 氧化氢
 */

/**
 * @param {number} n
 * @return {number}
 */
 var cuttingRope = function(n) {
  // arr[0] 没意义
  var arr = new Array(n+1).fill(1)
  for(var i = 2; i <= n; i++) {
      for(var j = 1; j < i; j++) {
          arr[i] = Math.max(arr[i], j * (i - j), arr[j] * (i - j))
      }
  }

  return arr[arr.length - 1]
};

export default cuttingRope