class Solution:
    def movingCount(self, m: int, n: int, k: int) -> int:
        def modeSum(num):
            sum = 0
            while num:
                mode = num % 10
                sum += mode
                num = num // 10

            return sum

        class Data:
            def __init__(self, x, y) -> None:
                self.x = x
                self.y = y
        queue = [Data(0, 0)]
        visited = [
            [0 for _ in range(n)] for _ in range(m)
        ]
        visited[0][0] = 1
        dir = [
            [0, 1],
            [0, -1],
            [1, 0],
            [-1, 0]
        ]
        ans = 0
        while len(queue):
            cur = queue.pop(0)
            ans += 1
            for index in range(4):
                x = cur.x + dir[index][0]
                y = cur.y + dir[index][1]
                if x < 0 or x >= m:
                    continue
                if y < 0 or y >= n:
                    continue
                if visited[x][y]:
                    continue
                if modeSum(x) + modeSum(y) > k:
                    continue
                visited[x][y] = 1
                queue.append(Data(x, y))

        return ans
