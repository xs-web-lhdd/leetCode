/**
 * @description 227 基本计算器 II
 * @author 氧化氢
 */

/**
 * @param {string} s
 * @return {number}
 */
 var calculate = function(s) {
  var str = s.trim()
  var l = str.length
  var stack = []
  var i = 0
  var pop
  while(i < l) {
    if(str[i] === '+'){
      i++
    }
    else if(str[i] === ' '){
      i++
    }
    else if(str[i] === '-') {
      i++
      var tmp = ''
      while(str[i] && str[i] !== '' && str[i] !== '/' && str[i] !== '+' && str[i] !== '-' && str[i] !== '*') {
        tmp += str[i]
        i++
      }
      stack.push(Number('-' + tmp))
    } 
    else if(str[i] === '*') {
      i++
      while(str[i] === ' ') {
        i++
      }
      var tmp = ''
      while(str[i] && str[i] !== '' && str[i] !== '/' && str[i] !== '+' && str[i] !== '-' && str[i] !== '*') {
        tmp += str[i]
        i++
      }
      pop = stack.pop()
      stack.push(pop * Number(tmp))
    } 
    else if(str[i] === '/') {
      i++
      while(str[i] === ' ') {
        i++
      }
      var tmp = ''
      while(str[i] && str[i] !== '' && str[i] !== '/' && str[i] !== '+' && str[i] !== '-' && str[i] !== '*') {
        tmp += str[i]
        i++
      }
      pop = stack.pop()
      stack.push(parseInt(pop / Number(tmp)))
    }
    else {
      var tmp = ''
      while(str[i] && str[i] !== '' && str[i] !== '/' && str[i] !== '+' && str[i] !== '-' && str[i] !== '*') {
        tmp += str[i]
        i++
      }
      stack.push(Number(tmp))
    }
  }

  return stack.reduce((pre, next) => pre + next)
};