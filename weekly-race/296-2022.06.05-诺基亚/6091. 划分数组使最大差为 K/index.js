/**
 * @description 6091. 划分数组使最大差为 K
 * @author 氧化氢
 */

// 题目链接：https://leetcode.cn/contest/weekly-contest-296/problems/partition-array-such-that-maximum-difference-is-k/

/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
 var partitionArray = function(nums, k) {
  nums.sort((a, b) => a - b)
  
  var arr = []
  
  while(nums.length) {
      var start = nums[nums.length-1]
      var end = start - k
      var count = 0
      while(nums[nums.length-1] >= end) count++, nums.pop()
      if(count > 0) arr.push(count)
  }
  
  return arr.length
};

export default partitionArray