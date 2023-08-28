class Solution:
    def numDecodings(self, s: str) -> int:
        dp = [0 for _ in range(len(s)+1)]
        s = '0' + s

        dp[0] = 1
        for i in range(1, len(s)):
            if s[i] >= '1' and s[i] <= '9':
                dp[i] += dp[i-1]
            if i > 1:
                num = int(s[i-1]) * 10 + int(s[i])
                if num >= 10 and num <= 26:
                    dp[i] += dp[i-2]

        return dp[len(s)-1]
