/**
 * @description 18-四数之和
 * @author 氧化氢
 */

/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[][]}
 */
 var fourSum = function(nums, target) {
  nums.sort((a, b) => a - b)
  var arr = []

  for(var k = 0; k < nums.length; k++) {
    // 第一个值：
    var temp = nums[k]
    // 截出来数组：
    var s = nums.slice(0, k).concat(nums.slice(k + 1))
    // 下面就是 三个数之和 的思路
    for(var i = 0; i < s.length; i++) {
      var val = s[i]
      var ans = s.slice(0, i).concat(s.slice(i + 1))
      for(var m = 0, n = ans.length - 1; m < n; ) {
          if(val + ans[m] + ans[n] + temp === target) {
              var item = [ans[m],ans[n],val,temp].sort((a, b) => a - b).join(" ")
              if(!arr.includes(item)) arr.push(item)
              // 不可直接 break，可能后面还有等于 0 的情况   
              m++
          }
          else if(val + ans[m] + ans[n] + temp < target) {
              m++
          }
          else if(val + ans[m] + ans[n] + temp > target) {
              n--
          }
      }
    }
  }

  var res = []
  for(var i = 0; i < arr.length; i++) {
    res.push(arr[i].split(" "))
  }

  return res
};