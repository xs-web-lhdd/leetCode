/**
 * @description 228-汇总区间
 * @author 氧化氢
 */

/**
 * @param {number[]} nums
 * @return {string[]}
 */
/**
 * @param {number[]} nums
 * @return {string[]}
 */
var summaryRanges = function(nums) {
  if(nums.length === 0) return []
  if(nums.length === 1) return [`${nums[0]}`]
  var set = new Set(nums)
  var arr = []
  arr.push(nums[0])

  for(var i = 0; i < nums.length; i++) {
      if(!set.has(nums[i]+1)) {
          arr.push(nums[i])
          if(nums[i+1] !== undefined) {
              arr.push(nums[i+1])
          }
      }
  }
  
  var res = []
  for(var i = 0; i < arr.length; i=i+2) {
      if(arr[i] !== arr[i+1]) {
          res.push(`${arr[i]}->${arr[i+1]}`)
      } else {
          res.push(`${arr[i]}`)
      }
  }

  return res
};