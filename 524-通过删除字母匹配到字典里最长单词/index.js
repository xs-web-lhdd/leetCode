/**
 * @description 524-通过删除字母匹配到字典里最长单词
 * @author 氧化氢
 */

/**
 * @param {string} s
 * @param {string[]} dictionary
 * @return {string}
 */
 var findLongestWord = function(s, dictionary) {
  var res = []
  var d = dictionary.sort()

  for(var i = 0; i < d.length; i++) {
      var t = d[i]
      var j = 0
      for(var z = 0; z < s.length; z++) {
        if(j < t.length && s[z] === t[j]) {
          j++
        }
      }
      if(j === t.length) res.push(t)
  }

  if(res.length) {
      var max = 0, index
      for(var i = 0; i < res.length; i++) {
          if(res[i].length > max) {
              max = res[i].length
              index = i
          }
      }

      return res[index]
  }
  return ""
};