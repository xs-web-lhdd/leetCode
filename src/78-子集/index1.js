/**
 * @description 78-子集
 * @author 氧化氢
 */

/**
 * @param {number[]} nums
 * @return {number[][]}
 * @solution 深度优先遍历 + 去重 --- 适用于数组内无重复元素求子集
 */
 var subsets = function(nums) {
  var arr = []
  var map = new Map()

  function dfs(nums, arr) {
      nums = nums.sort((a, b) => a - b)
      var str = nums.join('-')
      if(!map.get(str)) {
          map.set(str, 1)
          arr.push(nums)
          if(nums.length === 1) return
          for(var i = 0; i < nums.length; i++) {
              var a = nums.slice(0, i).concat(nums.slice(i+1))
              dfs(a, arr)
          }
      }
  }

  dfs(nums, arr)
  arr.push([])

  return arr
};

export default subsets