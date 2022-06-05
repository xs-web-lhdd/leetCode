/**
 * @description 387-字符串中的第一个唯一字符
 * @author 氧化氢
 */

/**
 * @param {string} s
 * @return {number}
 */
 var firstUniqChar = function(s) {
  var map = new Map()
  for(var i = 0; i < s.length; i++) {
      if(i === s.lastIndexOf(s[i])) {
          if(!map.get(s[i])) {
              return i
          }
      } else {
          map.set(s[i], 1)
      }
  }

  return -1
};