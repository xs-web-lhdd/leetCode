/**
 * @deprecated 1768 交替合并字符串
 * @author 氧化氢
 */

/**
 * @param {string} word1
 * @param {string} word2
 * @return {string}
 */
var mergeAlternately = function(word1, word2) {
  var start = '', min
  if(word1.length > word2.length) {
      min = word1.slice(word2.length)
      for(var i = 0; i < word2.length; i++) {
          start += (word1[i]+word2[i])
      }
      start += min
  }
  if(word1.length < word2.length) {
      min = word2.slice(word1.length)
      for(var i = 0; i < word1.length; i++) {
          start += (word1[i]+word2[i])
      }
      start += min
  }
  if(word1.length === word2.length) {
      for(var i = 0; i < word2.length; i++) {
          start += (word1[i]+word2[i])
      }
  }

  return start
};