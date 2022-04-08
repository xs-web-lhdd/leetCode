/**
 * @description 326-3 的幂
 * @author 氧化氢
 */

/**
 * @param {number} n
 * @return {boolean}
 */
 var isPowerOfThree = function(n) {
  if(n === 0) return false
  if(n === 1) return true
  else {
      if(String(n/3).includes(".")) return false
      else return isPowerOfThree(n / 3)
  }
};