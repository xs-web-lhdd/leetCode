/**
 * @description 187-重复的DNA序列
 * @author 氧化氢
 */

/**
 * @param {string} s
 * @return {string[]}
 */
 var findRepeatedDnaSequences = function(s) { 
  var arr = []
  var map = new Map()
  for(var i = 0; i < s.length; i++) {
    var str = s.slice(i, i+10)
    if(map.has(str)) {
      if(!arr.includes(str)) arr.push(str)
    }
    else map.set(str, 1)
  }

  return arr
};