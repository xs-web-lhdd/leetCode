/**
 * @description 395-至少有 K 个重复字符的最长子串
 * @author 氧化氢
 */

/**
 * @param {string} s
 * @param {number} k
 * @return {number}
 * @solution 暴力破解法 --- 超时！！！
 */
 var longestSubstringOne = function(s, k) {
  for(var i = s.length; i >= k; i--) {
    for(var j = 0; j < s.length - i + 1; j++) {
      var map = new Map()
      for(var m = j; m < j + i; m++) {
        if(map.has(s[m])) map.set(s[m], map.get(s[m]) + 1)
        else map.set(s[m], 1)
      }
      var flag = false
      for(var [key, value] of map) {
        if(value < k) {
          flag = true
          break
        }
      }

      if(flag) continue
      else return i
    }
  }

  return 0
};

export {
  longestSubstringOne
}