class Solution:
    def getKthMagicNumber(self, k: int) -> int:
        list = [1 for _ in range(k)]
        p1 = 0
        p2 = 0
        p3 = 0
        i = 1
        while i < k:
            res = min(list[p1] * 3, list[p2]*5, list[p3]*7)
            list[i] = res
            i += 1
            if res == list[p1] * 3:
                p1 += 1
            if res == list[p2] * 5:
                p2 += 1
            if res == list[p3] * 7:
                p3 += 1
        return list[k-1]
