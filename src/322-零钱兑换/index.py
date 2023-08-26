class Solution(object):
    def coinChange(self, coins, amount):
        """
        :type coins: List[int]
        :type amount: int
        :rtype: int
        """
        arr = [-1 for _ in range(amount + 1)]
        arr[0] = 0
        for index in range(1, amount+1):
            for coin in coins:
                if index < coin:
                    continue
                if arr[index - coin] == -1:
                    continue
                if arr[index] == -1 or arr[index - coin] + 1 < arr[index]:
                    arr[index] = arr[index - coin] + 1

        return arr[amount]
