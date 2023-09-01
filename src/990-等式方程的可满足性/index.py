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
    def equationsPossible(self, equations: List[str]) -> bool:
        unionSet = UnionSet(26)
        for item in equations:
            if item[1] == '!':
                continue
            char_l = item[0]
            char_r = item[3]
            unionSet.merge(ord(char_l)-ord('a'), ord(char_r)-ord('a'))

        for item in equations:
            if item[1] == '=':
                continue
            char_l = item[0]
            char_r = item[3]
            if unionSet.find(ord(char_l)-ord('a')) == unionSet.find(ord(char_r)-ord('a')):
                return False

        return True
