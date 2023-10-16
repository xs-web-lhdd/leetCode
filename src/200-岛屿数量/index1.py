class Solution:
    """
    采用深度优先遍历解决
    """

    def numIslands(self, grid: List[List[str]]) -> int:
        m = len(grid)
        n = len(grid[0])
        visited = [
            [-1 for _ in range(n)] for _ in range(m)
        ]

        ans = 0
        for i in range(m):
            for j in range(n):
                if visited[i][j] == 1:
                    continue
                if grid[i][j] == '0':
                    continue
                ans += 1
                self.dfs(i, j, grid, visited, m, n)

        return ans

    def dfs(self, i, j, grid, visited, m, n):
        dir = [
            [0, 1],
            [1, 0],
            [0, -1],
            [-1, 0]
        ]
        for index in range(4):
            x = i + dir[index][0]
            y = j + dir[index][1]
            if x < 0 or x >= m:
                continue
            if y < 0 or y >= n:
                continue
            if visited[x][y] == 1:
                continue
            if grid[x][y] == '0':
                continue
            visited[x][y] = 1
            self.dfs(x, y, grid, visited, m, n)
