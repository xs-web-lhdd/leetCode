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
    def findRedundantConnection(self, edges: List[List[int]]) -> List[int]:
        # 点的数量等于边的数量（有题目条件可知）
        n = len(edges)
        unionSet = UnionSet(n)
        for item in edges:
            dot_l = item[0]
            dot_r = item[1]
            if unionSet.find(dot_l) == unionSet.find(dot_r):
                return item
            else:
                unionSet.merge(dot_l, dot_r)
