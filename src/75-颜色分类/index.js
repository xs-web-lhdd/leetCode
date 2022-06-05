/**
 * @description 75-颜色分类
 * @author 氧化氢
 */

/**
 * @param {number[]} nums
 * @return {void} Do not return anything, modify nums in-place instead.
 */
 var sortColors = function(nums) {
  var map = new Map()
  for(var i = 0; i < nums.length; i++) {
      if(map.has(nums[i])) map.set(nums[i], map.get(nums[i]) + 1)
      else map.set(nums[i], 1)
  }

  var zero = map.get(0) ? map.get(0) : 0
  var one = zero + (map.get(1) ? map.get(1) : 0)
  var two = zero + one + (map.get(2) ? map.get(2) : 0)

  for(var i = 0; i < nums.length; i++) {
      if(i < zero) {
          nums[i] = 0
      }
      else if(i >= zero && i < one) {
          nums[i] = 1
      }
      else {
          nums[i] = 2
      }
  }

};