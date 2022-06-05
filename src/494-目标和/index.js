/**
 * @description 494-目标和
 * @author 氧化氢
 */

/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 * @method 思路没什么问题，但是过不来了，第一个问题是空间复杂度太高，第二个问题就是时间复杂度太多
 */
 var findTargetSumWays = function(nums, target) {
  var arr = []

  function dfs(i, k, ret) {
    var ret1 = ret.slice(0).concat(Number(`-${nums[i]}`))
    var ret2 = ret.slice(0).concat(Number(`${nums[i]}`))
    
    if(ret1.length === k) arr.push(ret1)
    else dfs(i+1, k, ret1)
    if(ret2.length === k) arr.push(ret2)
    else dfs(i+1, k, ret2)
  }

  dfs(0, nums.length, [])

  var res = 0
  for(var i = 0; i < arr.length; i++) {
    var ans = arr[i]
    var sum = 0
    for(var j = 0; j < ans.length; j++) sum += ans[j]
    if(sum === target) res += 1
  }

  return res
};

// ——————————————————————————————————————————————————————————————————————————————————————————————————————————————————————————————————————


/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 * @method 优化一： 降低空间复杂度，但还是过不了，时间复杂度太高
 */
 var findTargetSumWays = function(nums, target) {
  var res = 0

  function dfs(i, k, ret) {
    if(i >= k) return
    var ret1 = ret.slice(0).concat(Number(`-${nums[i]}`))
    var ret2 = ret.slice(0).concat(Number(`${nums[i]}`))
    if(ret1.length === k) {
        var sum = 0
        ret1.forEach(item => sum += item)
        if(sum === target) res += 1
    }
    else dfs(i+1, k, ret1)
    if(ret2.length === k) {
        var sum = 0
        ret2.forEach(item => sum += item)
        if(sum === target) res += 1
    }
    else dfs(i+1, k, ret2)
  }

  dfs(0, nums.length, [])

  return res
};

// ———————————————————————————————————————————————————————————————————————————————————————————————————————————————————————————————————————


/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 * @method 优化二： 降低复杂度，这种优化，其实思想还是一致，不过在进行递归的时候进行了不同写法，这样就省去了第二种写法中的 O(n) 求和过程
 */
 var findTargetSumWays = function(nums, target) {

  return dfs(0, target, nums)
};

function dfs(i, target, nums) {
  if(i === nums.length) {
    if(target === 0) return 1
    else return 0
  }
  var ans = 0
  ans += dfs(i+1, target-nums[i], nums)
  ans += dfs(i+1, target+nums[i], nums)

  return ans
}

// ———————————————————————————————————————————————————————————————————————————————————————————————————————————————————————————————————————


/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 * @method 优化三： 降低复杂度，继上一种优化后，通过记忆化搜索，再次优化，大约能提高近 6 倍的速度 
 */
 var findTargetSumWays = function(nums, target) {
  var map = new Map()
  return dfs(0, target, nums, map)
};

function dfs(i, target, nums, map) {
  if(i === nums.length) {
    if(target === 0) return 1
    else return 0
  }
  if(map.has(`${i}-${target}`)) return map.get(`${i}-${target}`)
  var ans = 0
  ans += dfs(i+1, target-nums[i], nums, map)
  ans += dfs(i+1, target+nums[i], nums, map)
  map.set(`${i}-${target}`, ans)

  return ans
}