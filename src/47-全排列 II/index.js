/**
 * @description 47-全排列 II
 * @author 氧化氢
 */

/**
 * @param {number[]} nums
 * @return {number[][]}
 */
 var permuteUnique = function(nums) {
  // 给 nums 中每一个数字都设置一个不唯一的键
  var map = new Map(), n = 1, mapArr = []
  for(var i = 0; i < nums.length; i++) {
    map.set(n, nums[i])
    mapArr.push(n)
    n++
  }


  var length = mapArr.length
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

  dfs(mapArr, [])


  // 深搜外，将键转为值
  for(var i = 0; i < ans.length; i++) {
    for(var j = 0; j < ans[i].length; j++) {
      ans[i][j] = map.get(ans[i][j])
    }
  }

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