class Solution:
    def shortestPathBinaryMatrix(self, grid: List[List[int]]) -> int:
        if grid[0][0] == 1:
            return -1

        # 八个方向
        dir = [
            [0, 1],
            [0, -1],
            [1, 0],
            [-1, 0],
            [1, 1],
            [1, -1],
            [-1, 1],
            [-1, -1]
        ]
        n = len(grid)
        visited = [
            [0 for _ in range(n)] for _ in range(n)
        ]
        visited[0][0] = 1
        queue = [Node(0, 0, 1)]
        while len(queue):
            cur = queue.pop(0)
            if cur.i == n-1 and cur.j == n-1:
                return cur.v
            for item in dir:
                x = cur.i + item[1]
                y = cur.j + item[0]
                if x < 0 or x > n-1:
                    continue
                if y < 0 or y > n-1:
                    continue
                if grid[x][y] == 1:
                    continue
                if visited[x][y]:
                    continue
                visited[x][y] = 1
                queue.append(Node(x, y, cur.v+1))

        return -1


class Node:
    def __init__(self, i, j, v):
        self.i = i
        self.j = j
        self.v = v
