/**
 * @description 209-长度最小的子数组
 * @author 氧化氢
 */

/**
 * @param {number} target
 * @param {number[]} nums
 * @return {number}
 */
var minSubArrayLen = function(target, nums) {
  var left = 0, right = 0, sum = 0, min = nums.length + 1
  while(right <= nums.length) {
    if(sum >= target) {
      min = Math.min(min, right - left)
      sum = sum - nums[left]
      left++
    } else {
      sum = sum + nums[right]
      right++
    }
  }
  return min <= nums.length ? min : 0
};