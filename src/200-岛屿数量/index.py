class UnionSet:
    # 只有 路径压缩 优化
    # 记录每一个节点父节点的颜色
    def __init__(self, n):
        self.n = n
        self.father = [
            i for i in range(n+1)
        ]

    def find(self, x):
        if self.father[x] == x:
            return x
        root = self.find(self.father[x])
        self.father[x] = root
        return root

    def merge(self, a, b):
        father_a = self.find(a)
        father_b = self.find(b)
        if father_a == father_b:
            return
        self.father[father_a] = father_b
        return


class Solution:
    """
    采用并查集解决
    """

    def numIslands(self, grid: List[List[str]]) -> int:
        n = len(grid)
        m = len(grid[0])
        unionSet = UnionSet(n*m)
        for i in range(n):
            for j in range(m):
                if grid[i][j] == '0':
                    continue
                if i > 0 and grid[i-1][j] == '1':
                    unionSet.merge(self.ind(i, j, m), self.ind(i-1, j, m))
                if j > 0 and grid[i][j-1] == '1':
                    unionSet.merge(self.ind(i, j, m), self.ind(i, j-1, m))

        ans = 0
        for i in range(n):
            for j in range(m):
                if grid[i][j] == '1' and unionSet.find(self.ind(i, j, m)) == self.ind(i, j, m):
                    ans += 1

        return ans

    def ind(self, i, j, m):
        return i*m + j
