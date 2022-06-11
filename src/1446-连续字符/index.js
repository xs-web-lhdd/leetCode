/**
 * @description 1446-连续字符
 * @author 氧化氢
 */

/**
 * @param {string} s
 * @return {number}
 */
 var maxPower = function(s) {
  if(s.length <= 1) return s.length
  var ans = 0, i = 0, j = 1
  while(j < s.length) {
      while(s[i] === s[j]) j++
      ans = Math.max(ans, j - i)
      i = j
  }

  return ans
};

export default maxPower