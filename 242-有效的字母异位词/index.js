/**
 * @description 242-有效的字母异位词
 * @author 氧化氢
 */

/**
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */
 var isAnagram = function(s, t) {
  var arr = new Array(26).fill(0)
  var res = new Array(26).fill(0)
  for(var i = 0; i < s.length; i++) {
      arr[s[i].charCodeAt() - 97] ? arr[s[i].charCodeAt() - 97]++ : arr[s[i].charCodeAt() - 97] = 1
  }
  for(var i = 0; i < t.length; i++) {
      res[t[i].charCodeAt() - 97] ? res[t[i].charCodeAt() - 97]++ : res[t[i].charCodeAt() - 97] = 1
  }

  return arr.join(',') === res.join(',')
};