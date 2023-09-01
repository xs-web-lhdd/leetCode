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
    def findCircleNum(self, isConnected: List[List[int]]) -> int:
        n = len(isConnected)
        unionSet = UnionSet(n)
        for i in range(n):
            for j in range(i):
                if isConnected[i][j] == 1:
                    unionSet.merge(i, j)
        ans = 0
        for i in range(n):
            if unionSet.find(i) == i:
                ans += 1

        return ans
