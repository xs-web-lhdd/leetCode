/**
 * @description
 * @author 氧化氢
 */

/**
 * @param {number} x
 * @return {number}
 */
// 普通方法：
 var mySqrt = function(x) {
  var i = 0
  while(true) {
      if(i * i === x) {
          return i
      }
      if(i * i > x) {
          return i - 1
      }
      i++
  }
};