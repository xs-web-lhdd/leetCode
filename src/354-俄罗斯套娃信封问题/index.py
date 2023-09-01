class Solution:
    """
    时间复杂度 O(n**2) 太高，超时
    """

    def maxEnvelopes(self, envelopes: List[List[int]]) -> int:
        l = len(envelopes)
        if l == 0 or l == 1:
            return l
        sort_list = sorted(envelopes, key=lambda x: (x[0], -x[1]))
        dp = [
            1 for _ in range(l)
        ]
        for i in range(1, l):
            for j in range(i):
                if sort_list[i][1] > sort_list[j][1]:
                    dp[i] = max(dp[i], dp[j]+1)

        return max(dp)
