/**
 * @description
 * @author 氧化氢
 */

/**
 * @param {string} s
 * @param {number} n
 * @return {string}
 */
 var reverseLeftWords = function(s, n) {
  var a = s.slice(n)
  var b = s.slice(0, n)
  return a + b
};