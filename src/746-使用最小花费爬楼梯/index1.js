/**
 * @description 746-使用最小花费爬楼梯
 * @author 氧化氢
 */

/**
 * @param {number[]} cost
 * @return {number}
 */
 var minCostClimbingStairs = function(cost) {
  var arr = [cost[0], cost[1]]
  for(var i = 2; i < cost.length; i++) {
      arr[i] = Math.min(arr[i-1], arr[i-2]) + cost[i]
  }

  return Math.min(arr[arr.length-1], arr[arr.length-2])
};

export default minCostClimbingStairs