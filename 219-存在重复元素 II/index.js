/**
 * @description 219-存在重复元素 II
 * @author 氧化氢
 */

/**
 * @param {number[]} nums
 * @param {number} k
 * @return {boolean}
 */
var containsNearbyDuplicate = function(nums, k) {
  var map = new Map()
  for(var i = 0; i < nums.length; i++) {
      if(map.get(nums[i])) {
          map.get(nums[i]).push(i)
      } else {
          map.set(nums[i], [i])
      }
  }

  var arr = []
  for(var [key, value] of map) {
      if(value.length > 1) arr.push(value) 
  }
  for(var i = 0; i < arr.length; i++) {
      var res = arr[i]
      for(var j = 1; j < res.length; j++) {
          if(res[j] - res[j-1] <= k) return true
      }
  }

  return false
};