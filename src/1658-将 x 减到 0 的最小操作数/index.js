/**
 * @description 1658-将 x 减到 0 的最小操作数
 * @author 氧化氢
 */

/**
 * @param {number[]} nums
 * @param {number} x
 * @solution 因为数组都是正的，那么可以求出左右的前缀和（前 i 个元素的和），然后从其中一边的前缀和进行遍历 ，去另一边的前缀和中查找 x - i，最终返回 两边元素个数之和（用代码演示就是下标） 的最小值即可，没找到返回 -1 ，看代码应该比较好理解
 * @return {number}
 */
 var minOperations = function(nums, x) {
  var sum_left = new Array(nums.length)
  var sum_right = new Array(nums.length)
  
  sum_left[0] = 0
  sum_right[0] = 0
  // 左边前缀和：
  for(var i = 0; i < nums.length; i++) {
    sum_left[i + 1] = sum_left[i] + nums[i]
  }
  // 右边前缀和:
  for(var j = nums.length-1; j >= 0; j--) {
    sum_right[nums.length - j] = sum_right[nums.length - j - 1] + nums[j]
  }

  var ans = -1
  for(var m = 0; m < sum_left.length; m++) {
    var n = binary_search(sum_right, x - sum_left[m])
    // 没找到:
    if(n === -1) continue
    // 超界情况,不予考虑
    if(n + m > nums.length) continue
    if(ans === -1 || ans > n + m) ans = n + m
  }

  return ans
};

function binary_search(nums, target) {
  var head = 0, tail = nums.length, mid
  while(tail - head > 3) {
    mid = (head + tail) >> 1
    if(nums[mid] === target) return mid
    else if(nums[mid] > target) tail = mid - 1
    else head = mid + 1
  }

  for(var i = head; i <= tail; i++) {
    if(nums[i] === target) return i
  }

  // 没有找到:
  return -1
}