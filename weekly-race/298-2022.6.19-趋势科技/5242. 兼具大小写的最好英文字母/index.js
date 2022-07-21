/**
 * @description 5242. 兼具大小写的最好英文字母
 * @author 氧化氢
 * @url https://leetcode.cn/problems/greatest-english-letter-in-upper-and-lower-case/
 */

/**
 * @param {string} s
 * @return {string}
 */
var greatestLetter = function (s) {
  var map = new Map()
  for (var i = 0; i < s.length; i++) {
    if (s[i].charCodeAt() >= 65 && s[i].charCodeAt() <= 90) {
      // 大写
      if (map.has(String.fromCharCode(s[i].charCodeAt() + 32))) map.set(s[i], 2)
      else map.set(s[i], 1)
    } else {
      if (map.has(String.fromCharCode(s[i].charCodeAt() - 32))) map.set(s[i], 2)
      else map.set(s[i], 1)
    }
  }

  var arr = []
  for (let [key, value] of map) {
    if (value === 2) arr.push(key.toUpperCase())
  }
  arr.sort((a, b) => a.charCodeAt() - b.charCodeAt())

  return arr[arr.length - 1] ? arr[arr.length - 1] : ""
};