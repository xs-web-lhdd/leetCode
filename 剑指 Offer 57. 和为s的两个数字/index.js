/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
 var twoSum = function(nums, target) {
  for(var i = 0, j = nums.length-1; i<j; ) {
      if(nums[i] + nums[j] > target) {
          j--
      } else if (nums[i] + nums[j] < target) {
          i++
      } else {
          return [nums[i], nums[j]]
      }
  }
};