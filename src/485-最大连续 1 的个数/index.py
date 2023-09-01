class Solution:
    def findMaxConsecutiveOnes(self, nums: List[int]) -> int:
        l = 0
        r = 0
        ans = 0
        length = len(nums)
        while r < length:
            if nums[r] == 1:
                if nums[l] == 0:
                    l = r
                r += 1
                ans = max(ans, r-l)
            else:
                l = r
                r += 1

        return ans
