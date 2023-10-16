class Solution:
    def solve(self, board) -> None:
        """
        Do not return anything, modify board in-place instead.
        """
        m = len(board)
        n = len(board[0])
        visited = [
            [-1 for _ in range(n)] for _ in range(m)
        ]

        def bfs(x, y, visited, board):
            class Data:
                def __init__(self, x, y):
                    self.x = x
                    self.y = y
            queue = [Data(x, y)]
            dir = [
                [0, 1],
                [-1, 0],
                [1, 0],
                [0, -1]
            ]
            while len(queue):
                cur = queue.pop(0)
                board[cur.x][cur.y] = 'o'
                for index in range(4):
                    i = cur.x + dir[index][0]
                    j = cur.y + dir[index][1]
                    if i < 0 or i >= m:
                        continue
                    if j < 0 or j >= n:
                        continue
                    if visited[i][j] == 1:
                        continue
                    if board[i][j] == 'O':
                        visited[i][j] = 1
                        queue.append(Data(i, j))

        for i in range(n):
            if board[0][i] == 'O':
                bfs(0, i, visited, board)
            if board[m-1][i] == 'O':
                bfs(m-1, i, visited, board)

        for j in range(1, m-1):
            if board[j][0] == 'O':
                bfs(j, 0, visited, board)
            if board[j][n-1] == 'O':
                bfs(j, n-1, visited, board)

        print(board)
        for i in range(m):
            for j in range(n):
                if board[i][j] != 'o':
                    board[i][j] = 'X'
                else:
                    board[i][j] = 'O'

        return board
