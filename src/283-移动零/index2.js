/**
 * @description 283-移动零
 * @author 氧化氢
 */

/**
 * @param {number[]} nums
 * @return {void} Do not return anything, modify nums in-place instead.
 * @solution 双指针
 */
var moveZeroes = function(nums) {
  var l = 0, r = 0
  while(r < nums.length) {
      if(nums[r]) {
          [nums[r], nums[l]] = [nums[l], nums[r]]
          l++
      }
      r++
  }

  return nums
};


export default moveZeroes