/**
 * @description 389 找不同
 * @author 氧化氢
 */

/**
 * @param {string} s
 * @param {string} t
 * @return {character}
 */
 var findTheDifference = function(s, t) {
  const map = new Map()
  for(var i = 0; i < t.length; i++) {
    if(map.get(t[i])) {
      map.set(t[i], map.get(t[i]) + 1)
    } else{
      map.set(t[i], 1)
    }
  }
  for(var j = 0; j < s.length; j++) {
    map.set(s[j], map.get(s[j]) - 1)
  }
  for(let [key, value] of map) {
    if(value === 1) return key
  }
};