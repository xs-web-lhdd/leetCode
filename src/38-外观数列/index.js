/**
 * @description 38-外观数列
 * @author 氧化氢
 */

/**
 * @param {number} n
 * @return {string}
 */
 var countAndSay = function(n) {
  var s = '1'
  for(var i = 0; i < n - 1; i++) {
    var p = 0, str = ''
    for(var j = 0; j < s.length; ) {
      while(p < s.length && s[p] === s[j]) p++
      str += (`${(p-j)}`+`${s[j]}`)
      j = p
    }
    s = str
  }

  return s
};

export default countAndSay