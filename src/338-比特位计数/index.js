/**
 * @description 338-比特位计数
 * @author 氧化氢
 */

/**
 * @param {number} n
 * @return {number[]}
 */
 var countBits = function(n) {
  var arr = []
  for(var i = 0; i <= n; i++) {
      var s = i.toString(2)
      var count = 0
      for(var j = 0; j < s.length; j++) {
          if(s[j] === '1') count++
      }
      arr.push(count)
  }

  return arr
};