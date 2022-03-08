/**
 * @param {number[]} nums
 * @return {number}
 */
 var majorityElement = function(nums) {
  var map = new Map()
  for(var i = 0; i < nums.length; i++) {
      map.get(nums[i]) ? map.set(nums[i], map.get(nums[i]) + 1) : map.set(nums[i], 1)
  }
  var arr = []
  for(let [key, value] of map) {
      arr.push(value)
  }
  var max = Math.max.apply(arr, arr)
  for(let [key, value] of map) {
      if(value === max) return Number(key)
  }
};