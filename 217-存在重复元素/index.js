/**
 * @description 217 存在重复元素
 * @author 氧化氢
 */

/**
 * @param {number[]} nums
 * @return {boolean}
 */
 var containsDuplicate = function(nums) {
  let falg = false
  for(var i = 0; i < nums.length; i++) {
      if(nums.indexOf(nums[i]) !== nums.lastIndexOf(nums[i])) {
          falg = true
          break
      }
  }

  return falg
};