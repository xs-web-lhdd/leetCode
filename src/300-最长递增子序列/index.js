/**
 * @description 300. 最长递增子序列
 * @author 氧化氢
 */

function lengthOfLIS(nums) {
  const n = nums.length
  if(n <= 1) {
      return n
  }

  const dp = new Array(n).fill(1)
  let max = 1

  for(let i = 1; i < n; i++) {
      for(let j = i - 1; j >= 0; j--) {
          if(nums[i] > nums[j]) {
              dp[i] = Math.max(dp[i], dp[j] + 1)
          }
      }
      max = Math.max(...dp)
  }

  return max
}