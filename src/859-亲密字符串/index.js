/**
 * @description 859 亲密字符串
 * @author 氧化氢
 */

/**
 * @param {string} s
 * @param {string} goal
 * @return {boolean}
 */
var buddyStrings = function(s, goal) {
  if (s.length !== goal.length) return false
  if (s === goal) {
    return s.length > new Set(goal).size
  }
  var a = null
  var b = null
  for(let i = 0; i < s.length; i++) {
    if (s[i] !== goal[i]) {
      if (a) {
        if((a === goal[i]) && (b === s[i])) {
          return true
        } else {
          return false
        }
      } else {
        a = s[i]
        b = goal[i]
      }
    }
  }
};


// 测试用例 30/34
// 忽略 "abcd" "badc" 这种情况