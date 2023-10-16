class Solution:
    def minCost(self, costs: List[List[int]]) -> int:
        l = len(costs)
        dp = [
            [0, 0, 0] for _ in range(l)
        ]
        dp[0][0] = costs[0][0]
        dp[0][1] = costs[0][1]
        dp[0][2] = costs[0][2]

        for i in range(1, l):
            dp[i][0] = min(dp[i-1][1], dp[i-1][2]) + costs[i][0]
            dp[i][1] = min(dp[i-1][0], dp[i-1][2]) + costs[i][1]
            dp[i][2] = min(dp[i-1][0], dp[i-1][1]) + costs[i][2]

        return min(dp[l-1][0], dp[l-1][1], dp[l-1][2])