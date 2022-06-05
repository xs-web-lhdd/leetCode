/**
 * @description 剑指 Offer 57 - II. 和为s的连续正数序列
 * @author 氧化氢
 */

/**
 * @param {number} target
 * @return {number[][]}
 */
 var findContinuousSequence = function(target) {
  var arr = []
  var max = Math.round(target / 2)
  for(var i = 1; i <= max; i++) {
      var sum = 0
      for(var j = i; j <= max; j++) {
          if(sum === target) {
              arr.push([i, j-1])
              break
          } else if(sum > target) {
              break
          } else {
              sum += j
          }
      }
  }
  for(var i = 0; i < arr.length; i++) {
      var currentTarget = arr[i]
      var start = currentTarget[0]
      var end = currentTarget[1]
      var newArr = []
      for(let i = start; i <= end; i++) {
          newArr.push(i)
      }
      arr[i] = newArr
  }

  if(target % 2) {
      arr.push([max-1, max])
  }
  
  return arr
};