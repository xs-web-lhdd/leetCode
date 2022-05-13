/**
 * @description 220-存在重复元素 III
 * @author 氧化氢
 */

/**
 * @param {number[]} nums
 * @param {number} k
 * @param {number} t
 * @return {boolean}
 */
 var containsNearbyAlmostDuplicate = function(nums, k, t) {
  for(var i = 0; i < nums.length; i++) {
    var j = i + 1
    // 窗户的长度要小于等于 k 所以 j - i <= k，又因为 j 要合法，所以 j < nums.length
    while(j - i <= k && j < nums.length) {
      if(Math.abs(nums[j] - nums[i]) <= t) return true
      else j++
    }
  }

  return false
};