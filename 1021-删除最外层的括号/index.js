/**
 * @description 1021 删除最外层的括号
 * @author 氧化氢
 */

/**
 * @param {string} s
 * @return {string}
 */
var removeOuterParentheses = function(s) {
  // all 中记录的是最外层括号的下标成对出现，all里面下标为偶数的对应的是 ( 在s中的下标，下标为奇数的对应的是 ) 在s中的下标
  var left = [], all = []
  for(let i = 0; i < s.length; i++) {
    if(s[i] === '(') {
      left.push(i)
    } else{
      // 剩最外层的括号的情况
      if(left.length === 1) {
        all.push(left[0])
        all.push(i)
        left.pop()
      }
      // 不是最外层的情况
      if(left.length > 1) {
        left.pop()
      }
    }
  }

  var result = ''
  for(let i = 0; i < s.length; i++) {
    if(!all.includes(i)) result += s[i]
   }
  // var result = []
  // for(let i = 0; i < s.length; i++) {
  //   if(!all.includes(i)) result.push(s[i])
  //  }

  // return result.join('')
  return result
};