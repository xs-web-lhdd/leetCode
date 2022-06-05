/**
 * @description 806-写字符串需要的行数
 * @author 氧化氢
 */

/**
 * @param {number[]} widths
 * @param {string} s
 * @return {number[]}
 */
 var numberOfLines = function(widths, s) {
  var sum = 0
  var level = 1
  for(var i = 0; i < s.length; i++) {
      sum += widths[s[i].charCodeAt() - 97]
      if(sum > 100) {
          level += 1
          sum = widths[s[i].charCodeAt() - 97]
      }
  }

  return [level, sum]
};