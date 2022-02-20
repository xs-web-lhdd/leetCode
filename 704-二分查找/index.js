/**
 * @description 704 二分查找
 * @author 氧化氢
 */

/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
// 利用js特性没啥意思---嘿嘿嘿
var search = function(nums, target) {
  return nums.indexOf(target)
};



/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
// 这是二分：
 var search = function(nums, target) {
  var left = 0
  var right = nums.length - 1
  var mid
  while(left <= right) {
      mid = Math.round((left + right) / 2)
      if(target > nums[mid]) {
          left = mid + 1
      } else if(target < nums[mid]) {
          right = mid - 1
      } else {
          return mid
      }
  }

  return -1
};