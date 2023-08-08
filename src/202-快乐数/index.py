class Solution:
    def isHappy(self, n: int) -> bool:
        pre = n
        cur = self.getNext(n)
        while cur != pre and cur != 1:
            pre = self.getNext(pre)
            cur = self.getNext(self.getNext(cur))

        return cur == 1

    def getNext(self, n):
        t = 0
        while n:
            t += (n % 10) ** 2
            n = n // 10

        return t
