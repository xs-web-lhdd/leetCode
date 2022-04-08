/**
 * @description 383-赎金信
 * @author 氧化氢
 */

/**
 * @param {string} ransomNote
 * @param {string} magazine
 * @return {boolean}
 */
 var canConstruct = function(ransomNote, magazine) {
  if(magazine.length < ransomNote.length) return false
  var map1 = new Map()
  for(var i = 0; i < ransomNote.length; i++) {
      if(map1.get(ransomNote[i])) {
          map1.set(ransomNote[i], map1.get(ransomNote[i]) + 1)
      } else {
          map1.set(ransomNote[i], 1)
      }
  }

  for(var [key, value] of map1) {
      for(var i = 0; i < value; i++) {
          if(magazine.includes(key)) {
              magazine = magazine.slice(0, magazine.indexOf(key)) + magazine.slice(magazine.indexOf(key)+1)
          } else return false
      }
  }

  return true
};