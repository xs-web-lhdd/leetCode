/**
 * @description 283-移动零
 * @author 氧化氢
 */

/**
 * @param {number[]} nums
 * @return {void} Do not return anything, modify nums in-place instead.
 * @solution 时间复杂度太高 O(n ** 2) 不可取
 */
 var moveZeroes = function(nums) {
  var count = 0
  for(var i = 0; i < nums.length; i++) {
      if(nums[i] === 0) count++
  }

  var res = 0
  for(var i = 0; res < count;) {
      if(nums[i]) {
          i++
      } else {
          nums.push(...nums.splice(i, 1))
          res++
      }
  }

  return nums
};

export default moveZeroes