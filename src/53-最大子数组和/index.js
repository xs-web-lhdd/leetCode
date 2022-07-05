/**
 * @description 53-最大子数组和
 * @author 氧化氢
 */

/**
 * @param {number[]} nums
 * @return {number}
 */
 var maxSubArray = function(nums) {
  // 生成前缀和:
  var pre = [0]
  for(var i = 1; i <= nums.length; i++) {
    pre[i] = pre[i - 1] + nums[i - 1]
  }

  pre.shift()
  
  // 初始化最小值：
  var min = 0
  var ans = Number.MIN_SAFE_INTEGER
  for(var num of pre) {
    // 求出当前位置与当前位置之前最小位置只差:
    ans = Math.max(ans, num - min)
    // 更新最小值:
    min = Math.min(num, min)
  }

  return ans
};

export default maxSubArray