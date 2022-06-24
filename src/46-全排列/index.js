/**
 * @description 46-全排列
 * @author 氧化氢
 */

/**
 * @param {number[]} nums
 * @return {number[][]}
 * @solution 一个深搜直接结果
 */
 var permute = function(nums) {
  var length = nums.length
  var ans = []

  function dfs(nums, a) {
    if(a.length === length) {
        ans.push(a)
        return
    }
    for(var i = 0; i < nums.length; i++) {
      var target = a.slice(0)
      var arr = nums.slice(0, i).concat(nums.slice(i+1))
      target.push(nums[i])
      dfs(arr, target)
    }
  }

  dfs(nums, [])

  return ans
};

export default permute