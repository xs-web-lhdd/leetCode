class Solution:
    def maxProfit(self, prices: List[int]) -> int:
        ans = 0

        for index in range(len(prices)-1):
            if prices[index+1] - prices[index] > 0:
                ans += prices[index+1] - prices[index]

        return ans
