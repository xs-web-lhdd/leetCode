/**
 * @description 239 滑动窗口最大值
 * @author 氧化氢
 */

/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number[]}
 */
// 双重循环：
 var maxSlidingWindow = function(nums, k) {
  const arr = []
  for(var i = 0; i < nums.length; i++) {
    if(i + k > nums.length) break
    let max = nums[i]
    for(var j = i + 1; j < i + k; j++) {
      if(nums[j] > max) max = nums[j]
    }
    arr.push(max)
  }

  return arr
};