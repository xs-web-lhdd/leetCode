/**
 * @description 844 比较含退格的字符串
 * @author 氧化氢
 */

/**
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */
var backspaceCompare = function(s, t) {
  var a = [], b = []
  for(char of s) {
      if(char === '#') {
          a.pop()
      } else {
          a.push(char)
      }
  }
  for(char of t) {
      if(char === '#') {
          b.pop()
      } else {
          b.push(char)
      }
  }
  var x = '', y = ''
  a.map(item => {
      x += item
  })
  b.map(item => {
      y += item
  })

  return x === y
};