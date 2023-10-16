class Solution:
    def updateMatrix(self, mat: List[List[int]]) -> List[List[int]]:
        n = len(mat)
        m = len(mat[0])
        res = [
            [-1 for _ in range(m)] for _ in range(n)
        ]

        class Data:
            def __init__(self, i, j, v) -> None:
                self.i = i
                self.j = j
                self.v = v
        queue = []
        for i in range(n):
            for j in range(m):
                if mat[i][j]:
                    continue
                res[i][j] = 0
                queue.append(Data(i, j, 0))
        dir = [
            [0, 1],
            [1, 0],
            [0, -1],
            [-1, 0]
        ]
        while len(queue):
            cur = queue.pop(0)
            for index in range(4):
                x = cur.i + dir[index][0]
                y = cur.j + dir[index][1]
                if x < 0 or x >= n:
                    continue
                if y < 0 or y >= m:
                    continue
                if res[x][y] != -1:
                    continue
                res[x][y] = cur.v + 1
                queue.append(Data(x, y, res[x][y]))

        return res
