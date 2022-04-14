/**
 * @description 448-找到所有数组中消失的数字
 * @author 氧化氢
 */

/**
 * @param {number[]} nums
 * @return {number[]}
 */
 var findDisappearedNumbers = function(nums) {
  var res = []
  nums = nums.sort((a, b) => a - b)
  for(var i = 1; i <= nums.length; i++) {
      if(!nums.includes(i)) res.push(i)
  }

  console.log(res)

  return res
};