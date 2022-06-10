/**
 * @description 191-位1的个数
 * @author 氧化氢
 */


/**
 * @param {number} n - a positive integer
 * @return {number}
 * @solution 位运算
 */
 var hammingWeight = function(n) {
  var count = 0
  while(n) {
    n &= n-1
    count++
  }

  return count
};

export {
  hammingWeight
}