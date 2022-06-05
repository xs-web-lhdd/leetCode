/**
 * @description 796-旋转字符串
 * @author 氧化氢
 */

/**
 * @param {string} s
 * @param {string} goal
 * @return {boolean}
 */
 var rotateString = function(s, goal) {
  if(s === goal) return true
  if(s.length !== goal.length) return false

  var length = goal.length
  while(length > 0) {
      if(s === goal) return true
      else {
          goal = goal.slice(1) + goal.slice(0, 1)
          length--
      }
  }


  return false
};