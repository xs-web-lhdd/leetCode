/**
 * @description 746-使用最小花费爬楼梯
 * @author 氧化氢
 */

/**
 * @param {number[]} cost
 * @return {number}
 */
 var minCostClimbingStairs = function(cost) {
  var dp = [], n = cost.length
  cost.push(0)
  dp[0] = cost[0]
  dp[1] = cost[1]
  for(var i = 2; i <= n; i++) {
      dp[i] = Math.min(dp[i - 2], dp[i - 1]) + cost[i] 
  }

  return dp[n]
};


// ---------------------------------------------- 更好理解的写法 ------------------------------------------


/**
 * @param {number[]} cost
 * @return {number}
 */
 var minCostClimbingStairs = function(cost) {
  var dp = [], n = cost.length
  dp[0] = cost[0]
  dp[1] = cost[1]
  for(var i = 2; i < n; i++) {
      dp[i] = Math.min(dp[i - 2], dp[i - 1]) + cost[i] 
  }

  return Math.min(dp[n-1], dp[n-2])
};