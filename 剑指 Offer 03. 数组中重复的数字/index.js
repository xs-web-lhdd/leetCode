/**
 * @description 
 * @author 氧化氢
 */

/**
 * @param {number[]} nums
 * @return {number}
 */
 var findRepeatNumber = function(nums) {
  for(var i = 0; i < nums.length; i++) {
      if(nums.indexOf(nums[i]) !== nums.lastIndexOf(nums[i])) return nums[i]
  }
};