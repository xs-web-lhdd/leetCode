class UnionSet:
    # 记录每一个节点父节点的颜色
    def __init__(self, n):
        self.n = n
        self.father = [
            i for i in range(n+1)
        ]

    def find(self, x):
        if self.father[x] == x:
            return x

        return self.find(self.father[x])

    def merge(self, a, b):
        father_a = self.find(a)
        father_b = self.find(b)
        if father_a == father_b:
            return
        self.father[father_a] = father_b
        return
