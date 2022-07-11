/**
 * @description 剑指 Offer 49. 丑数
 * @author 氧化氢
 */

/**
 * @param {number} n
 * @return {number}
 * @solution https://leetcode.cn/problems/chou-shu-lcof/solution/by-smooth-b-lftm/
 */
 var nthUglyNumber = function(n) {
  var arr = [1]

  var j = 0
  for(var i = 0; i < n; i++) {
    arr = [...new Set(arr)]
    var num = arr.sort((a, b) => a - b)[j]
    arr.push(num * 2, num * 3, num * 5)
    j++
  }

  return arr[n-1]
};