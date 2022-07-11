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
  var a = 0, b = 0, c = 0
  for(var i = 1; i < n; i++) {
    arr[i] = Math.min(arr[a] * 2, arr[b] * 3, arr[c] * 5)
    if(arr[i] === arr[a] * 2) a++
    if(arr[i] === arr[b] * 3) b++
    if(arr[i] === arr[c] * 5) c++
  }


  return arr[n - 1]
};