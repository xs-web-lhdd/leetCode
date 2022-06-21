/**
 * @description 13-罗马数字转整数
 * @author 氧化氢
 */

/**
 * @param {string} s
 * @return {number}
 * @solution 找规律，从左往右一直加，如果左边字母比右边字母小，也就是 4 或者 9 的罗马数字的情况那么是减，其它都是加
 */
 var romanToInt = function(s) {
  var map = {
    'M': 1000,
    'D': 500,
    'C': 100,
    'L': 50,
    'X': 10,
    'V': 5,
    'I': 1
  }

  var ans = 0
  for(var i = 0; i < s.length; i++) {
    var j = i + 1
    if(j === s.length) {
      ans += map[s[i]]
      break
    }
    // 是 4 或者 9 的情况，要减去当前数字，其它都是加
    if(map[s[j]] > map[s[i]]) {
      ans -= map[s[i]]
    } else {
      ans += map[s[i]]
    }
  }

  return ans
};

export default romanToInt