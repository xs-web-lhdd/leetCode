/**
 * @param {number[]} nums
 * @return {boolean}
 */
 var isStraight = function(nums) {
    
  nums.sort((a, b) => a - b)
  var KingCount = 0
  for(var i = 0; i < nums.length; i++) {
      if(nums[i] === 0) {
          KingCount++
      } else {
          if(nums[i] === nums[i+1]) return false
          else {
              if(nums[i+1] - nums[i] > 1) {
                  if((nums[i+1] - nums[i]-1) > KingCount) return false
                  else KingCount = KingCount - (nums[i+1] - nums[i]-1)
              }
          }
      }
  }

  return true
};