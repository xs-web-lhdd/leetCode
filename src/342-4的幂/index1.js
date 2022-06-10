/**
 * @description 342-4的幂
 * @author 氧化氢
 */

/**
 * @param {number} n
 * @return {boolean}
 */
 var isPowerOfFour = function(n) {
  return n > 0 && (n & (n-1)) === 0 && n % 3 === 1
};

export {
  isPowerOfFour
}