/**
 * @description 442-数组中重复的数据
 * @author 氧化氢
 */

/**
 * @param {number[]} nums
 * @return {number[]}
 * @method 哈希表一把梭 --- 比较简单直接看代码吧！！！
 */
 var findDuplicates = function(nums) {
  var map = new Map()
  var ret = []
  for(var i = 0; i < nums.length; i++) {
    if(map.has(nums[i])) ret.push(nums[i])
    else map.set(nums[i], 1)
  }

  return ret
};