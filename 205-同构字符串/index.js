/**
 * @description 205-同构字符串
 * @author 氧化氢
 */

/**
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */
var isIsomorphic = function(s, t) {
  if(s.length !== t.length) return false
  let arr1 = [], arr2 = []
  getArr(s, arr1)
  getArr(t, arr2)

  return arr1.join(' ') === arr2.join(' ')
};

function getArr(s, arr) {
  let map = new Map()
  let start = 1
  for(var i = 0; i < s.length; i++) {
      if(map.get(s[i])) {
          arr.push(map.get(s[i]))
      } else {
          map.set(s[i], start)
          arr.push(start)
          start++
      }
  }
}