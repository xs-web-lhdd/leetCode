class Solution:
    """
    这种写法超时，因为时间复杂度太高
    """

    def minCut(self, s: str) -> int:
        dp = [0 for _ in range(len(s)+1)]

        for index in range(1, len(s)+1):
            dp[index] = index
            for p in range(index):
                if self.isPalinDrome(s, p, index-1):
                    dp[index] = min(dp[index], dp[p]+1)

        return dp[len(dp)-1] - 1

    def isPalinDrome(self, s, i, j):
        while i <= j:
            if s[i] != s[j]:
                return False
            i += 1
            j -= 1

        return True
