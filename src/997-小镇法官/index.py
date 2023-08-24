class Solution:
    """
    利用 图的邻接矩阵 进行解题
    矩阵的纵轴表示出度，横轴表示入度
    A 的出度表示 A 相信谁
    B 的入度表示 谁相信 B

    小镇法官的条件是：
      1、不能相信任何人，也就是 其对应的出度数组全是 0
      2、所有人都要相信小镇法官，其对应的入度都是 1
    """

    def findJudge(self, n: int, trust: List[List[int]]) -> int:
        # 初始化 n * n 的矩阵，表示邻接矩阵，初始化为 0 ，表示每个节点没有连接边
        arr = []
        for _ in range(n):
            arr.append([0 for _ in range(n)])

        # 将有边的邻接矩阵位置设置为 1
        i = 0
        while i < len(trust):
            x = trust[i][0] - 1
            y = trust[i][1] - 1
            arr[x][y] = 1

            i += 1

        list = [1 for _ in range(n)]

        j = 0
        while j < len(arr):
            person = arr[j]
            for q in person:
                if q:
                    list[j] = 0
            j += 1

        for index in range(len(list)):
            if list[index] == 0:
                continue
            for a in range(len(arr)):
                if a != index and arr[a][index] == 0:
                    list[index] = 0
                    break

        if 1 in list:
            return list.index(1) + 1
        else:
            return -1
