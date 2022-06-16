/**
 * @description 剑指 Offer 65. 不用加减乘除做加法
 * @author 氧化氢
 */

/**
 * @param {number} a
 * @param {number} b
 * @return {number}
 */
 var add = function(a, b) {
  while (b) {
      let c = (a & b) << 1 // 进位
      a ^= b               // 非进位和
      b = c                // 进位
  }
  return a
};

export default add