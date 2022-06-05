/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
 var threeSumClosest = function(nums, target) {
  // if(nums.length === 3) return nums[0] + nums[1] + nums[2]
  nums.sort((a, b) => a - b)
  var arr = []
  for(var i = 0; i < nums.length; i++) {
      var val = nums[i]
      // 将除了 nums[i] 之外的数分割出来,然后进行双指针操作
      var ans = nums.slice(0, i).concat(nums.slice(i + 1))
      for(var m = 0, n = ans.length - 1; m < n; ) {
          if(val + ans[m] + ans[n] === target) return target
          else if(val + ans[m] + ans[n] < target) {
              arr.push(val + ans[m] + ans[n])
              m++
          }
          else if(val + ans[m] + ans[n] > target) {
              arr.push(val + ans[m] + ans[n])
              n--
          }
      }
  }

  var min = Number.MAX_VALUE, res
  for(var i = 0; i < arr.length; i++) {
      if(Math.abs(arr[i] - target) < min) {
          min = Math.abs(arr[i] - target)
          res = arr[i]
      }
  }

  return res
};