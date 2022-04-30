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


/**
 * @param {number} x
 * @return {number}
 * @method 经典二分 --- 之经典骚操作！！！ 循环 100 次之后 low 和 high 很接近
 */
 var mySqrt = function(x) {
    
  var low = 0, high = x
  for(var i = 0; i< 100; i++) {
      var mid = low + (high - low) / 2
      if(mid * mid <= x) low = mid
      else high = mid
  }

  return Math.floor(low)
}