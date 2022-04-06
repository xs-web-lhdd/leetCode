/**
 * @description 268-丢失的数字
 * @author 氧化氢
 */

/**
 * @param {number[]} nums
 * @return {number}
 */
 var missingNumber = function(nums) {
  nums = nums.sort((a, b) => a - b)
  var length = nums.length
  if(nums[0] !== 0) return 0
  if(nums[length - 1] !== length) return length
   
  for(var i = 0, j = length-1; i < j; ) {
      if(nums[i+1]-nums[i] === 1) {
          i++
      } else {
          return nums[i] + 1
      }
      if(nums[j] - nums[j-1] === 1) {
          j--
      } else {
          return nums[j] - 1
      }
  }
};