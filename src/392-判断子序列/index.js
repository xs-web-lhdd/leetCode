/**
 * @description 392-判断子序列
 * @author 氧化氢
 */

/**
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */
var isSubsequence = function(s, t) {
  var j = 0
  for(var i = 0; i < t.length; i++) {
    if(t[i] === s[j]) {
      j++
    }
  }

  return j === s.length
};

// 双指针完事