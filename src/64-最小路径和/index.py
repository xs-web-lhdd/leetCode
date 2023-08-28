class Solution:
    def minPathSum(self, grid: List[List[int]]) -> int:
        m = len(grid)
        n = len(grid[0])

        dp = [
            [40001 for _ in range(n)] for _ in range(m)
        ]

        dp[0][0] = grid[0][0]

        for i in range(m):
            for j in range(n):
                if i and j:
                    # 可以从上边走过来也可以从左边走过来，去两者的最小值作为选择
                    dp[i][j] = min(dp[i-1][j], dp[i][j-1]) + grid[i][j]
                elif i:
                    # 只能从上边走过来
                    dp[i][j] = dp[i-1][j] + grid[i][j]
                elif j:
                    # 只能从左边走过来
                    dp[i][j] = dp[i][j-1] + grid[i][j]

        return dp[m-1][n-1]
