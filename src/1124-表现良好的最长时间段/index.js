/**
 * @description 1124 表现良好的最长时间段
 * @author 氧化氢
 */

/**
 * @param {number[]} hours
 * @return {number}
 */
var longestWPI = function (hours) {
  var preSum = new Array(hours.length + 1).fill(0)
  for (var i = 0; i < hours.length; i++) {
    if (hours[i] > 8) preSum[i + 1] = preSum[i] + 1
    else preSum[i + 1] = preSum[i] - 1
  }

  // 从 0 开始的单调递减栈：
  var stack = []
  stack.push(0)
  for (var i = 1; i < preSum.length; i++) {
    if (preSum[i] < preSum[stack[stack.length - 1]]) stack.push(i)
  }

  var max = 0
  for (var i = preSum.length - 1; i > max; i--) {
    while (stack.length && preSum[stack[stack.length - 1]] < preSum[i]) {
      max = Math.max(max, i - stack.pop())
    }
  }

  return max
};