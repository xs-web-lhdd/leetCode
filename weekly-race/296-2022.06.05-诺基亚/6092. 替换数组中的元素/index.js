/**
 * @description 6092. 替换数组中的元素
 * @author 氧化氢
 */

// 题目链接：https://leetcode.cn/problems/replace-elements-in-an-array/

/**
 * @param {number[]} nums
 * @param {number[][]} operations
 * @return {number[]}
 */
 var arrayChange = function(nums, operations) {
  for(var i = 0; i < operations.length; i++) {
    var node = operations[i]
    var target = node[0]
    var goal = node[1]
    for(var j = 0; j < nums.length; j++) {
      if(nums[j] === target) nums[j] = goal
    }
  }

  return nums
};


export default arrayChange