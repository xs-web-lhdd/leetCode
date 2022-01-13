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
  //  判断 s和 goal的长度是否相等，不相等直接就返回 false
  if (s.length !== goal.length) return false
  if (s === goal) {
    return s.length > new Set(goal).size
  }
  var a = '', b = ''
  for(let i = 0; i < s.length; i ++) {
    if(s[i] !== goal[i]) {
      a += s[i]
      b += goal[i]
    }
  }

  return a.length === 2 && a[0] === b[1] && b[0] === a[1]
};