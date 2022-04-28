/**
 * @description 57-插入区间
 * @author 氧化氢
 */

/**
 * @param {number[][]} intervals
 * @param {number[]} newInterval
 * @return {number[][]}
 */
 var insert = function(intervals, newInterval) {
  intervals.push(newInterval)
  intervals.sort((item1, item2) => item1[0] - item2[0])
  var one = null, two = null
  for(var i = 0, j = 1; j < intervals.length; ) {
      one = intervals[i]
      two = intervals[j]
      if(two[0] <= one[0] && two[1] >= one[1]) {
          intervals.splice(i, 2, [two[0], two[1]])
      }
      else if(two[0] >= one[0] && two[1] <= one[1]) {
          intervals.splice(i, 2, [one[0], one[1]])
      }
      else if(two[0] <= one[1]) {
          intervals.splice(i, 2, [one[0], two[1]])
      }
      else {
          i++
          j++
      }
  }

  return intervals
};