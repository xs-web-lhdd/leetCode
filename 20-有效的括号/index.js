/**
 * @description 20 有效的括号
 * @author 氧化氢
 */

/**
 * @param {string} s
 * @return {boolean}
 */
var isValid = function(s) {
  if(s.length % 2 === 1) return false
  var stack = [];
  for(let i = 0; i < s.length; i++){
    var c = s[i];
    if(c === '(' || c === '[' || c === '{') {
      stack.push(c)
    } else{
      var top = stack[stack.length - 1]
      if((top === '(' && c === ')') || (top === '[' && c === ']') || (top === '{' && c === '}')) {
        stack.pop()
      } else {
        return false
      } 
    }
  }

  return stack.length === 0
};