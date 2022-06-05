/**
 * @description 6090. 极大极小游戏
 * @author 氧化氢
 */


// 题目链接：https://leetcode.cn/problems/min-max-game/

/**
 * @param {number[]} nums
 * @return {number}
 */
 var minMaxGame = function(nums) {
  while(nums.length > 2) {
    var length = nums.length
    var arr = []

    var k = 0
    for(var i = 0; i < length - 1; i+=2) {
      if(k % 2) arr.push(Math.max(nums[i], nums[i+1]))
      else arr.push(Math.min(nums[i], nums[i+1]))
      k++
    }

    nums = arr
  }

  return nums[1] ? Math.min(nums[0], nums[1]) : nums[0]
};


export default minMaxGame