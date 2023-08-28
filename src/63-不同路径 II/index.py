class Solution:
    def uniquePathsWithObstacles(self, obstacleGrid: List[List[int]]) -> int:
        if obstacleGrid[0][0] == 1:
            return 0
        m = len(obstacleGrid)
        n = len(obstacleGrid[0])
        dp = [
            [0 for _ in range(n)] for _ in range(m)
        ]

        for i in range(m):
            for j in range(n):
                if obstacleGrid[i][j] == 0:
                    if i == 0 and j == 0:
                        if obstacleGrid[i][j] == 1:
                            return 0
                        else:
                            dp[i][j] = 1
                    else:
                        if i:
                            dp[i][j] += dp[i-1][j]
                        if j:
                            dp[i][j] += dp[i][j-1]

        return dp[m-1][n-1]
