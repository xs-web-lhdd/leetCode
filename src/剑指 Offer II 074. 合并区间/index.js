/**
 * @description 剑指 offer II 074. 合并区间
 * @author 氧化氢
 */

/**
 * @param {number[][]} intervals
 * @return {number[][]}
 */
 var merge = function(intervals) {
  intervals.sort((a, b) => a[0] - b[0])
  for(var i = 0; i < intervals.length-1; ) {
      if(isContain(intervals[i], intervals[i+1])) {
          intervals.splice(i, 2, isContain(intervals[i], intervals[i+1]))
      } else {
          i++
      }
  }
  
  return intervals
};

function isContain(arr1, arr2) {
  // [1,1] [1,2]
  // [1,4] [2,3]
  if(arr1[1] >= arr2[0] && arr1[1] <= arr2[1]) return [arr1[0], arr2[1]]
  if(arr1[1] >= arr2[0] && arr1[1] > arr2[1]) return arr1

  return false
}


