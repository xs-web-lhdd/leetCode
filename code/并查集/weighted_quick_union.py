class UnionSet:
    # 只有 按质优化
    # 记录每一个节点父节点的颜色
    def __init__(self, n):
        self.n = n
        self.father = [
            i for i in range(n+1)
        ]
        self.size = [
            1 for _ in range(n+1)
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
        # 进行优化，谁的节点多谁就作为 merge 的父亲节点
        if self.size[father_a] < self.size[father_b]:
            self.father[father_a] = father_b
            self.size[father_b] += self.size[father_a]
        else:
            self.father[father_b] = father_a
            self.size[father_a] += self.size[father_b]
        return
