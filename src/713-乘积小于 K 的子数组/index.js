/**
 * @description 713-乘积小于 K 的子数组
 * @author 氧化氢
 */

/**
 * @param {number[]} nums
 * @param {number} k
 * @method 不出意外的超时了
 * @return {number}
 */
 var numSubarrayProductLessThanK = function(nums, k) {
  var ret = []
  for(var i = 1; i <= nums.length; i++) {
    // i 为 窗口的大小
    for(var j = 0; j < nums.length; j++) {
      if(j + i > nums.length) break
      var arr = nums.slice(j, j+i)
      var sum = 1
      for(var s = 0; s < arr.length; s++) sum *= arr[s]
      if(sum < k) ret.push(arr)
    }
  }

  return ret.length
};


/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
 var numSubarrayProductLessThanK = function(nums, k) {
  var ret = []
  nums.sort((a, b) => a - b)
  for(var i = 0; i < nums.length; i++) {
    // 开始截取的数组下标位置：
    for(var j = 1; j < nums.length; j++) {
      if(i + j > nums.length) break
      var arr = slice(i, i+j)
      var sum = 1
      for(var s = 0; s < arr.length; s++) sum *= arr[s]
      if(sum < k) ret.push(arr)
      else break
    }
  }

  return ret.length
};


/**
 * @param {number[]} nums
 * @param {number} k
 * @method 优化了一部分，但还是不出意外的超时了
 * @return {number}
 */
 var numSubarrayProductLessThanK = function(nums, k) {
    var ans = 0
    for(var i = 0; i < nums.length; i++) {
      // 开始截取的数组下标位置：
      for(var j = 1; j <= nums.length; j++) {
        if(i + j > nums.length) break
        var arr = nums.slice(i, i+j)
        var sum = 1
        for(var s = 0; s < arr.length; s++) sum *= arr[s]
        if(sum < k) ans++
        else if(nums[j+1] !== 1) break
      }
    }
  
    return ans
};


/**
 * @param {number[]} nums
 * @param {number} k
 * @method 滑动窗口的终结解决方案 --- 还是我太嫩，没想到
 * @tutorial https://www.bilibili.com/video/BV1aS4y1h7w7?spm_id_from=333.337.search-card.all.click
 * @return {number}
 */
 var numSubarrayProductLessThanK = function(nums, k) {
  var cur = 1
  var left = 0, right = 0, ans = 0
  while(left <= right && right < nums.length) {
      cur *= nums[right]
      while(left <= right && cur >= k) {
          cur /= nums[left]
          left++
      }
      ans += (right - left + 1)
      right++
  }

  return ans
};