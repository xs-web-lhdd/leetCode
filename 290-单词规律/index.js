/**
 * @description 290-单词规律
 * @author 氧化氢
 */

/**
 * @param {string} pattern
 * @param {string} s
 * @return {boolean}
 */
 var wordPattern = function(pattern, s) {
  if(s.includes(" ")) return strToArr(pattern) === strToArr(s)
  else {
      if(pattern.length === 1) return true
      else return false
  }
};

function strToArr(str) {
  var arr = []
  var map = new Map()
  var count = 1
  if(str.includes(" ")) {
      var array = str.split(' ')
      for(var i = 0; i < array.length; i++) {
          if(map.get(array[i])) {
              arr.push(map.get(array[i]))
          } else {
              arr.push(count)
              map.set(array[i], count)
              count++
          }
      }

      return arr.join("") 
  } else {
      for(var i = 0; i < str.length; i++) {
          if(map.get(str[i])) {
              arr.push(map.get(str[i]))
          } else {
              arr.push(count)
              map.set(str[i], count)
              count++
          }
      }

      return arr.join("") 
  }
}