class Solution:
    def removeStones(self, stones: List[List[int]]) -> int:
        n = 10010
        parent = list(range(2*n))
        # 并查集查找

        def find(x):
            if x != parent[x]:
                parent[x] = find(parent[x])
            return parent[x]
        # 合并

        def union(i, j):
            parent[find(i)] = find(j)
        # 连通横纵坐标
        for i, j in stones:
            union(i, j+n)
        # 获取连通区域的根节点
        root = set()
        for i, j in stones:
            root.add(find(i))
        return len(stones)-len(root)
