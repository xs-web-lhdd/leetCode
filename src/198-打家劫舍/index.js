/**
 * @description 198-打家劫舍
 * @author 氧化氢
 */

/**
 * @param {number[]} nums
 * @return {number}
 */
 var rob = function(nums) {
  var length = nums.length
  var arr = []
  for(var i = 0; i < length; i++) {
    arr.push(new Array(2))
  }
  // 不偷第一家的最大收益 
  arr[0][0] = 0
  // 偷第一家的最大收益
  arr[0][1] = nums[0]

  for(var i = 1; i < length; i++) {
    arr[i][0] = Math.max(arr[i-1][0], arr[i-1][1])
    arr[i][1] = arr[i-1][0] + nums[i]
  }

  return Math.max(arr[length - 1][0], arr[length - 1][1])
};

export default rob