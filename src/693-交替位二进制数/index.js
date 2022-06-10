/**
 * @description 693-交替位二进制数
 * @author 氧化氢
 */

/**
 * @param {number} n
 * @return {boolean}
 */
 var hasAlternatingBits = function(n) {
  while(n) {
    if((n & 3) === 3 || (n & 3) === 0) return false
    n = n >> 1
  }

  return true
};

export {
  hasAlternatingBits
}