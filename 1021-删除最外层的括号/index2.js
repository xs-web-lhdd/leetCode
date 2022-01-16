/**
 * @description 1021 删除最外层的括号
 * @author 氧化氢
 */

/**
 * @param {string} s
 * @return {string}
 */
var removeOuterParentheses = function(s) {
  var res = ''
  var oped = 0
  for(char of s) {
    if(char === '(' && oped++ > 0) res += char
    if(char === ')' && oped-- > 1) res += char
  }
  
  return res
};