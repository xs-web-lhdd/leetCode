/**
 * @description 3-无重复字符的最长子串
 * @author 氧化氢
 */

/**
 * @param {string} s
 * @return {number}
 */
var lengthOfLongestSubstring = function(s) {
  if(!s) return 0
  if(s.length == 1) return 1
  if(s.length == 2 && s[1] !== s[0]) return 2
  var arr = []
  let flag = true
  for(var i = 0; i < s.length; i++) {
      var map = new Map()
      for(var j = i; j < s.length; j++) {
          if(map.get(s[j])) {
              arr.push(map.size)
              flag = false
              break
          } else {
              map.set(s[j], 1)
              flag = true
          }
      }
      if(flag) arr.push(s.length - i)
  }
  return Math.max.apply(arr, arr)
}