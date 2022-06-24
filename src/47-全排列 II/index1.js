/**
 * @description 47-全排列 II
 * @author 氧化氢
 */

/**
 * @param {number[]} nums
 * @return {number[][]}
 */
 var permuteUnique = function(nums) {
  var length = nums.length
  var ans = []

  // 因为键不一致，所以可以深搜
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

  // 通过哈希表去重：
  var res = []
  var m = new Map()
  for(var i = 0; i < ans.length; i++) {
    if(!m.get(ans[i].join(''))) {
      res.push(ans[i])
      m.set(ans[i].join(''), 1)
    }
  }

  return res
};

export default permuteUnique