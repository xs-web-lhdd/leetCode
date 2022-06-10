/**
 * @description 461-汉明距离
 * @author 氧化氢
 */

/**
 * @param {number} x
 * @param {number} y
 * @return {number}
 */
 var hammingDistance = function(x, y) {
  var n = x ^ y
  var count = 0
  while(n) {
    n &= n - 1
    count++
  }

  return count
};

export {
  hammingDistance
}