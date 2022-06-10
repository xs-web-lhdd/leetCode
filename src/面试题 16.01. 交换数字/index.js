/**
 * @description 面试题 16.01. 交换数字 
 * @author 氧化氢
 */

/**
 * @param {number[]} numbers
 * @return {number[]}
 */
 var swapNumbers = function(numbers) {
/** 位运算中 异或 模型
  a = a ^ b
  b = a ^ b
  a = a ^ b
*/

  numbers[0] = numbers[0] ^ numbers[1]
  numbers[1] = numbers[0] ^ numbers[1]
  numbers[0] = numbers[0] ^ numbers[1]

  return numbers
};

export {
  swapNumbers
}