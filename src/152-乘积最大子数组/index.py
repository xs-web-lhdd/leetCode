class Solution(object):
    def maxProduct(self, nums):
        """
        :type nums: List[int]
        :rtype: int
        """
        ans = -10000001
        minNum = 1
        maxNum = 1

        for index in range(len(nums)):
            if nums[index] < 0:
                (maxNum, minNum) = self.swap(maxNum, minNum)
            minNum = min(minNum * nums[index], nums[index])
            maxNum = max(maxNum * nums[index], nums[index])
            ans = max(ans, maxNum)
        return ans

    def swap(self, max, min):
        temp = max
        max = min
        min = temp

        return (max, min)
