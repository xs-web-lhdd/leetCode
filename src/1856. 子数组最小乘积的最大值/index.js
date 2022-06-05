/**
 * @description 1856. 子数组最小乘积的最大值
 * @author 氧化氢
 */


/**
 * @param {number[]} nums
 * @return {number}
 */
 var maxSumMinProduct = function(nums) {
  var s = [], pre = [], next = []

  for(var i = 0; i < nums.length; i++) {
    while(s.length && nums[i] < nums[s[s.length - 1]]) {
      next[s[s.length - 1]] = i
      s.pop()
    }

    if(!s.length) pre[i] = -1
    else pre[i] = s[s.length - 1]

    s.push(i)
  }

  while(s.length) next[s[s.length - 1]] = nums.length, s.pop()

  // 前缀和：
  var sum = []
  sum[0] = 0
  for(var i = 0; i < nums.length; i++) sum[i + 1] = sum[i] + nums[i]


  // 注意 bigint 这种形式！！！坑
  var max = BigInt(0)
  for(var i = 0; i < nums.length; i++) {
    var s = BigInt(BigInt(nums[i]) * BigInt(sum[next[i]] - sum[pre[i] + 1]))
    if(max < s) max = s
  }

  return max % BigInt(1000000007);

};

