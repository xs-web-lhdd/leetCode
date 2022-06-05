/**
 * @description 84-柱状图中最大的矩形
 * @author 氧化氢
 */

/**
 * @param {number[]} heights
 * @return {number}
 */
 var largestRectangleArea = function(heights) {
  var s = [], pre = [], next = []

  for(var i = 0; i < heights.length; i++) {
    while(s.length && heights[i] < heights[s[s.length - 1]]) {
      next[s[s.length - 1]] = i
      s.pop()
    }

    if(!s.length) pre[i] = -1
    else pre[i] = s[s.length - 1]

    s.push(i)
  }

  while(s.length) next[s[s.length - 1]] = heights.length, s.pop()

  var res = []
  for(var i = 0; i < heights.length; i++) {
    res[i] = heights[i] * (next[i] - pre[i] - 1)
  }

  return Math.max.apply(res, res)
};
