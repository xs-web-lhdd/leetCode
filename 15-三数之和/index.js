/**
 * @description 15-三数之和
 * @author 氧化氢
 */

/**
 * @param {number[]} nums
 * @return {number[][]}
 */
 var threeSum = function(nums) {
  nums.sort((a, b) => a - b)
  var arr = []
  for(var i = 0; i < nums.length; i++) {
      var val = nums[i]
      var ans = nums.slice(0, i).concat(nums.slice(i + 1))
      for(var m = 0, n = ans.length - 1; m < n; ) {
          if(val + ans[m] + ans[n] === 0) {
              var item = [ans[m],ans[n],val].sort((a, b) => a - b).join(" ")
              if(!arr.includes(item)) arr.push(item)
              // 不可直接 break，可能后面还有等于 0 的情况   
              m++
          }
          else if(val + ans[m] + ans[n] < 0) {
              m++
          }
          else if(val + ans[m] + ans[n] > 0) {
              n--
          }
      }
  }

  var res = []
  for(var i = 0; i < arr.length; i++) {
    res.push(arr[i].split(" "))
  }  

  return res
};