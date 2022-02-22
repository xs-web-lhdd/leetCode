/**
 * @description 438 找到字符串中所有字母异位词
 * @author 氧化氢
 */

/**
 * @param {string} s
 * @param {string} p
 * @return {number[]}
 */
 var findAnagrams = function(s, p) {
  if(p.length > s.length) return []
  var minLength
  minLength = p.length
  const minMap = new Map()
  for(var i = 0; i < p.length; i++) {
    if(minMap.get(p[i])) {
      minMap.set(p[i], minMap.get(p[i])+1)
    } else {
      minMap.set(p[i], 1)
    }
  }


  const arr = []
  for(var j = 0; j < s.length - minLength + 1; j++) {
    let map = new Map()
    for(var i = j; i < j + minLength; i++) {
      if(map.get(s[i])) {
        map.set(s[i], map.get(s[i])+1)
      } else {
        map.set(s[i], 1)
      }
    }
    for(let [key, value] of minMap) {
      if(map.get(key) !== value) {
        arr[j] = 1
      }
    }
  }

  let indexs = []
  for(var i = 0; i < s.length - minLength + 1; i++) {
    indexs.push(i)
  }
  const res = []
  arr.forEach((item, index) => {
    if(item) res.push(index)
  })
  return   indexs.filter(item => {
    if(!res.includes(item)) return true
  })
};