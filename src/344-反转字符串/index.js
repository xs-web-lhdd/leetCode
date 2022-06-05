/**
 * @description 344-反转字符串
 * @author 氧化氢
 */

/**
 * @param {character[]} s
 * @return {void} Do not return anything, modify s in-place instead.
 */
 var reverseString = function(s) {
  var temp = null
  for(var i = 0, j = s.length - 1; i < j; i++, j--) {
      temp = s[j]
      s[j] = s[i]
      s[i] = temp
  }
};