/**
 * @description 3-无重复字符的最长子串
 * @author 氧化氢
 */

/**
 * @param {string} s
 * @return {number}
 */
 var lengthOfLongestSubstring = function(s) {
  if(s.length === 0) return 0
  if(s.length === 1) return 1
  for(var i = s.length; i > 0; i--) {
    const result = isLongest(i, s)
    if(result)  return result[1] - result[0]
  }
};

var isLongest = function(length, s) {
  for(var i = 0; i < s.length - length + 1; i++) {
    let map = new Map(), flag = true
    for(var j = i; j < i + length; j++) {
      if(map.get(s[j])) {
        flag = false
      }
      else map.set(s[j], 1)
    }
    if(flag) return [i, i + length]
  }
} 