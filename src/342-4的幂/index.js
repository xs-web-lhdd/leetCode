/**
 * @description 342-4的幂
 * @author 氧化氢
 */

/**
 * @param {number} n
 * @return {boolean}
 */
 var isPowerOfFour = function(n) {
  if(n === 0) return false
  if(n === 1) return true
  else {
      if(String(n/4).includes(".")) return false
      else return isPowerOfFour(n / 4)
  }
};