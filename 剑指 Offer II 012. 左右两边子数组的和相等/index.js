/**
 * @description 剑指 Offer II 012. 左右两边子数组的和相等
 * @author 氧化氢
 */

/**
 * @param {number[]} nums
 * @return {number}
 */
 var pivotIndex = function(nums) {
  for(var i = 0; i < nums.length; i++) {
      var sum_one = 0
      var sum_two = 0
      for(var j = 0; j < i; j++) {
          sum_one += nums[j]
      }
      for(var k = i+1; k < nums.length; k++) {
          sum_two += nums[k]
      }

      if(sum_one === sum_two) return i
  }


  return -1
};