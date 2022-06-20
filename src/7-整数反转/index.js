/**
 * @description 7-整数反转
 * @author 氧化氢
 */

/**
 * @param {number} x
 * @return {number}
 */
 var reverse = function(x) {
  var ans = 0
  if(x > 0) {
      while(x !== 0) {
          ans = ans * 10 + x % 10
          x = Math.floor(x/ 10)
      }

      return ans > 2 ** 31 - 1 ? 0 : ans
  }
  else if(x < 0) {
      x = -x
      while(x !== 0) {
          ans = ans * 10 + x % 10
          x = Math.floor(x/ 10)
      }

      return -ans < -(2 ** 31 - 1 ) ? 0 : -ans        
  }
  else return 0
};


export default reverse