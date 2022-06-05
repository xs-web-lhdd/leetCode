/**
 * @description 剑指 Offer 59 - I. 滑动窗口的最大值
 * @author 氧化氢
 */

/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number[]}
 * @method 套模板 --- 单调队列一把梭
 */
 var maxSlidingWindow = function(nums, k) {
  var queue = [], ret = []
  for(var i = 0; i < nums.length; i++) {
      while(queue.length && nums[queue[queue.length-1]] < nums[i]) queue.pop()
      queue.push(i)
      if(i - queue[0] === k) queue.shift()
      if(i + 1 < k) continue
      ret.push(nums[queue[0]])
  } 

  return ret
};