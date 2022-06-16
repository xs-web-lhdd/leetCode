/**
 * @description 剑指 Offer 64. 求1+2+…+n
 * @author 氧化氢
 */

/**
 * @param {number} n
 * @return {number}
 */
 var sumNums = function(n) {
  if(n === 0) return 0
  if(n === 1) return 1
  return n + sumNums(n-1)
};

export default sumNums