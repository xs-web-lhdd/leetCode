/**
 * @description 409-最长回文串
 * @author 氧化氢
 */

/**
 * @param {string} s
 * @return {number}
 */
 var longestPalindrome = function(s) {
  var map = new Map()
  for(var i = 0; i < s.length; i++) {
    if(map.has(s[i])) map.set(s[i], map.get(s[i]) + 1)
    else map.set(s[i], 1)
  }

  var ouShu = 0
  var maxOdd= 0, maxKey
  var sum = 0
  for(let [key, value] of map) {
    if(value > maxOdd && value % 2) maxOdd = value, maxKey = key
  }
  for(let [key, value] of map) {
    if(value % 2 && value <= maxOdd && key !== maxKey) sum = sum + value - 1
    else if(!(value % 2)) ouShu += value
  }
  
  return ouShu + maxOdd + sum
};
// 无语至极，我竟然在这个题上花费 30 分钟加
// 思路很简单: 偶数字母全算上,奇数字母除最长那个字母全部算上外,其他字母都减一加上