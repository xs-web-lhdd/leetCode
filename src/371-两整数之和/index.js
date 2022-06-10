/**
 * @description 371-两整数之和
 * @author 氧化氢
 */

/**
 * @param {number} a
 * @param {number} b
 * @return {number}
 */
 var getSum = function(a, b) {
  return b === 0 ? a : getSum(a^b, (a&b) << 1)
};

// 任何两个数相加等于 带进位加和的值 和 不带进位的和的值 相加

export {
  getSum
}