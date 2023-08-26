class Solution:
    def rob(self, nums: List[int]) -> int:
        dp = [
            [0 for _ in range(len(nums))],
            [0 for _ in range(len(nums))]
        ]

        dp[0][0] = 0
        dp[1][0] = nums[0]

        for index in range(1, len(nums)):
            dp[0][index] = max(dp[0][index-1], dp[1][index-1])
            dp[1][index] = dp[0][index-1] + nums[index]

        return max(dp[0][len(nums)-1], dp[1][len(nums)-1])
