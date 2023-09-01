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
    def makeConnected(self, n: int, connections: List[List[int]]) -> int:
        # 网线数量不够的情况：
        if len(connections) + 1 < n:
            return -1
        # 将机器连接起来：
        unionSet = UnionSet(n)
        for item in connections:
            m_l = item[0]
            m_r = item[1]
            unionSet.merge(m_l, m_r)
        # 获得集合数量：
        res = 0
        for i in range(n):
            if unionSet.find(i) == i:
                res += 1

        # 最少操作次数等于集合数量减一
        return res - 1
