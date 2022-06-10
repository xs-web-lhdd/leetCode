/**
 * @description 231-2 的幂
 * @author 氧化氢
 */

/**
 * @param {number} n
 * @return {boolean}
 */
 var isPowerOfTwo = function(n) {
  return n > 0 && (n & (n - 1)) === 0
};

export {
  isPowerOfTwo
}