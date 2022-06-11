/**
 * @description 283-移动零
 * @author 氧化氢
 */

/**
 * @param {number[]} nums
 * @return {void} Do not return anything, modify nums in-place instead.
 * @solution 时间复杂度 O(n)
 */
var moveZeroes = function(nums) {
  var j = 0
  for(var i = 0; i < nums.length; i++) {
      if(nums[i] !== 0) {
          nums[j] = nums[i]
          j++
      }
  }

  for(var i = j; i < nums.length; i++) {
      nums[i] = 0
  }

  return nums
};

export default moveZeroes
