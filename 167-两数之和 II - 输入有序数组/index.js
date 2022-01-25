/**
 * @deprecated 167 两数之和 II - 输入有序数组
 * @author 氧化氢
 */

/**
 * @param {number[]} numbers
 * @param {number} target
 * @return {number[]}
 */
var twoSum = function(numbers, target) {
  var i = 0, j = numbers.length - 1
  while(i < j) {
      if(numbers[i] + numbers[j] === target) {
          return [i+1,j+1]
      } else if(numbers[i] + numbers[j] > target) {
          j--
      } else {
          i++
      }
  }
};