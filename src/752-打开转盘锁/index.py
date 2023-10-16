class Solution:
    def openLock(self, deadends: List[str], target: str) -> int:
        dir = {}
        for item in deadends:
            if item == '0000':
                return -1
            dir[item] = 1

        queue = [Data('0000', 0)]
        dir['0000'] = 1
        while len(queue):
            cur = queue.pop(0)
            if cur.s == target:
                print(cur.s)
                return cur.v
            for index in range(4):
                for p in range(2):
                    res = self.getS(cur.s, index, p)
                    if dir.get(res, 0):
                        continue
                    dir[res] = 1
                    queue.append(Data(res, cur.v+1))

        return -1

    def getS(self, s, i, j):
        """
        s 是原字符串
        第 i 位置
        j 上调还是下调，上调是 1 ，下调是 0
        """
        if j:
            val = int(s[i]) + 1
            if val > 9:
                val = 0
        else:
            val = int(s[i]) - 1
            if val < 0:
                val = 9
        return s[0: i] + str(val) + s[i+1:]


class Data:
    def __init__(self, s, v):
        self.s = s
        self.v = v
