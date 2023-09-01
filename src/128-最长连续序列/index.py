class UnionSet:
    # 只有 路径压缩 优化
    # 记录每一个节点父节点的颜色
    def __init__(self, n):
        self.n = n
        self.father = [
            i for i in range(n+1)
        ]
        self.size = [
            1 for i in range(n+1)
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
        self.size[father_b] += self.size[father_a]
        self.father[father_a] = father_b
        return

    def getMaxUnionNumber(self):
        return max(self.size)


class Solution:
    def longestConsecutive(self, nums: List[int]) -> int:
        if len(nums) == 0:
            return 0
        dir = {}
        unionSet = UnionSet(len(nums))
        for index, item in enumerate(nums):
            # 如果当前元素的值已经联通起来了，就不需要再联通了
            if dir.get(str(item), -1) >= 0:
                continue
            # 把当前元素和小于和大于他值为 1 的元素联通起来
            left = item - 1
            right = item + 1
            if dir.get(str(left), -1) >= 0:
                unionSet.merge(index, dir.get(str(left)))
            if dir.get(str(right), -1) >= 0:
                unionSet.merge(index, dir.get(str(right)))
            dir[str(item)] = index

        return unionSet.getMaxUnionNumber()
