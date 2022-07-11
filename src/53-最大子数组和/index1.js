/**
 * @description 53. 最大子数组和
 * @author 氧化氢
 */

/**
 * @param {number[]} nums
 * @return {number}
 * @solution 动态规划 --- 以每个位置为结尾的连续数组的和的最大值
 */
 var maxSubArray = function(nums) {
  var arr = []
  arr[0] = nums[0]
  
  for(var i = 1; i < nums.length; i++) {
    // 因为要以 nums[i] 为结尾,并且是连续的,所以必须拿到前面连续数组的最大值加上nums[i] 这样组成的就是nums[i]和之前数组合成的连续数组,但有可能nums[i]前面加起来的都要大,自己单独作为一个数组是最优解
    arr[i] = Math.max(arr[i-1] + nums[i], nums[i])
  }
  
  return Math.max(...arr)
};