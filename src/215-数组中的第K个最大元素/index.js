/**
 * @deprecated 215 数组中的第K个最大元素
 * @author 氧化氢
 */

/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
var findKthLargest = function(nums, k) {
  nums.sort((x, y) => y - x)
  return nums[k - 1]
};