/**
 * @description 剑指 Offer 42. 连续子数组的最大和
 * @author 氧化氢
 */

/**
 * @param {number[]} nums
 * @return {number}
 */
 var maxSubArray = function(nums) {
  var preArr = [0]
  for(var i = 1; i <= nums.length; i++) {
      preArr[i] = preArr[i-1] + nums[i-1]
  }

  var max = -10000
  for(var i = 0; i < preArr.length; i++) {
      for(var j = 0; j < i; j++) max = Math.max(max, preArr[i] - preArr[j])
  }
  
  return max
};

export default maxSubArray