/**
 * @description 8-字符串转换整数 (atoi)
 * @author 氧化氢
 */

/**
 * @param {string} s
 * @return {number}
 */
 var myAtoi = function(s) {
  var str = ''
  // 1、去空格
  s = s.trim()
  // 2、根据首字母判断正负、没有就是是正
  if(s[0] === '+' || s[0] === '-') {
      // 3、截取有效数字符号 
      for(var i = 1; i < s.length; i++) {
          if(charIsCan(s[i])) str += s[i]
          else break
      }
      // 空字符串直接 返回 0
      if(!str) return 0
      else {
          // 4、去掉前缀 0 
          var i = 0
          while(str[i] === '0') i++
          str = str.slice(i)
          // 为空直接返回 0 以防后面这种格式： -'' 不能转换出错
          if(str === '') return 0
          if(s[0] === '+') {
              return Number(str) > 2 ** 31 - 1 ? 2 ** 31 - 1 : Number(str)
          } else {
              return Number(`-${str}`) < -(2 ** 31) ? -(2 ** 31) : Number(`-${str}`)
          }
      }
  } else {
      for(var i = 0; i < s.length; i++) {
          if(charIsCan(s[i])) str += s[i]
          else break
      }
      if(!str) return 0
      else {
          var i = 0
          while(str[i] === '0') i++
          str = str.slice(i)
          return Number(str) > 2 ** 31 - 1 ? 2 ** 31 - 1 : Number(str)
      }
  }
  
};

function charIsCan(char) {
  return char.charCodeAt() >= 48 && char.charCodeAt() <= 57
}


export default myAtoi