class Solution:
    def uniquePathsWithObstacles(self, obstacleGrid: List[List[int]]) -> int:
        if obstacleGrid[0][0] == 1:
            return 0
        m = len(obstacleGrid)
        n = len(obstacleGrid[0])
        dp = [
            [0 for _ in range(n)] for _ in range(m)
        ]
        for i in range(n):
            if obstacleGrid[0][i] == 0:
                dp[0][i] = 1
            else:
                break
        for j in range(m):
            if obstacleGrid[j][0] == 0:
                dp[j][0] = 1
            else:
                break

        for i in range(m):
            for j in range(n):
                if obstacleGrid[i][j] == 0:
                    if i and j:
                        dp[i][j] = dp[i-1][j] + dp[i][j-1]

        return dp[m-1][n-1]
