/**
 * @description 剑指 Offer 67. 把字符串转换成整数
 * @author 氧化氢
 */

/**
 * @param {string} str
 * @return {number}
 */
 var strToInt = function(str) {
  str = str.trim()
  if(!str) return 0
  var s = ''
  if(isNumber(str[0]) || str[0] == '-' || str[0] == '+') {
      s += str[0]
  } else {
      return 0
  }
  for(var i = 1; i < str.length; i++) {
      if(isNumber(str[i])) {
          s += str[i]
      } else {
          break
      }
  }
  if(s == '-' || s == '+') return 0
  if(Number(s) > 2147483647) return 2147483647
  if(Number(s) < -2147483648) return -2147483648

  return Number(s)
};

function isNumber(char) {
  return char.charCodeAt() >= 48 && char.charCodeAt() <= 57
}