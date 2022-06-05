/**
 * @description 169-多数元素
 * @author 氧化氢
 */

/**
 * @param {number[]} nums
 * @return {number}
 */
 var majorityElement = function(nums) {
  var map = new Map()
  for(var i = 0; i < nums.length; i++) {
      if(map.get(nums[i])) map.set(nums[i], map.get(nums[i])+1)
      else map.set(nums[i], 1)
  }
  var condition = nums.length / 2
  for(var [key, value] of map) {
      if(value > condition) return key
  }
};