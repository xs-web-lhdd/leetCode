/**
 * @description 150 逆波兰表达式求值
 * @author 氧化氢
 */

/**
 * @param {string[]} tokens
 * @return {number}
 */
 var evalRPN = function(tokens) {
  while(isHaveChar(tokens)) {
      var start = dep(tokens)
      tokens.splice(start-2, 3, value(tokens[start-2], tokens[start-1], tokens[start]))
  }

  return tokens[0]
};

function isHaveChar(arr) {
  return arr.includes('+') || arr.includes('-') || arr.includes('*') || arr.includes('/')
}

function dep(arr) {
  for(var i = 0; i < arr.length; i++) {
      if(arr[i] == '+' || arr[i] == '-' || arr[i] == '*' || arr[i] == '/') {
          return i
      }
  }
}

function value(char1, char2, char) {
  if(char === '+') return Number(char1) + Number(char2)
  if(char === '-') return Number(char1) - Number(char2)
  if(char === '*') return Number(char1) * Number(char2)
  if(char === '/') {
      if(Number(char1) / Number(char2) > 0) {
          return Math.floor(Number(char1) / Number(char2))
      } else {
          return Math.ceil(Number(char1) / Number(char2))
      }
  }
}