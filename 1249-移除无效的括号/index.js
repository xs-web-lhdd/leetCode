/**
 * @description 1249 移除无效的括号
 * @author 氧化氢
 */

/**
 * @param {string} s
 * @return {string}
 */
var minRemoveToMakeValid = function(s) {
  var left = [], right = []
  for(let i = 0; i < s.length; i++) {
    if(s[i] === '(') left.push(i)
    if(s[i] === ')') {
      if(left.length) {
        left.pop()
      } else {
        right.push(i)
      }
    }
  }

  var str = [...s], del = left.concat(right)
  for(let i = 0; i < del.length; i++) {
    str[del[i]] = ''
  }

  return str.join('')
};