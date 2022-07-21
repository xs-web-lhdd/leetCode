/**
 * @description 16-最接近的三数之和
 * @author 氧化氢
 */

/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
var threeSumClosest = function (nums, target) {
  // if(nums.length === 3) return nums[0] + nums[1] + nums[2]
  nums.sort((a, b) => a - b)
  var arr = []
  for (var i = 0; i < nums.length; i++) {
    var val = nums[i]
    for (var m = 0, n = nums.length - 1; m < n;) {
      if (m === i) m++
      else if (n === i) n--

      // 如果移动后还满足条件再进行判断
      if (m < n) {
        if (val + nums[m] + nums[n] === target) return target
        else if (val + nums[m] + nums[n] < target) {
          arr.push(val + nums[m] + nums[n])
          m++
        } else if (val + nums[m] + nums[n] > target) {
          arr.push(val + nums[m] + nums[n])
          n--
        }
      }
    }
  }

  var min = Number.MAX_VALUE,
    res
  for (var i = 0; i < arr.length; i++) {
    if (Math.abs(arr[i] - target) < min) {
      min = Math.abs(arr[i] - target)
      res = arr[i]
    }
  }

  return res
};