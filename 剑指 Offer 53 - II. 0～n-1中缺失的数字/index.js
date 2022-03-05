/**
 * @param {number[]} nums
 * @return {number}
 */
 var missingNumber = function(nums) {
  var index = 0
  for(var i = 0; i < nums.length; i++) {
      if(index !== nums[i]) return index
      else index++
  }
  return index
};