/**
 * @param {string} s
 * @return {character}
 */
var firstUniqChar = function (s) {
  var map = new Map()
  for (var i = 0; i < s.length; i++) {
    map.get(s[i]) ? map.set(s[i], map.get(s[i]) + 1) : map.set(s[i], 1)
  }
  for (let [key, value] of map) {
    if (value === 1) return key
  }
  return ' '
};