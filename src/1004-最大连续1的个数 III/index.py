class Solution:
    def longestOnes(self, nums: List[int], k: int) -> int:
        l = r = ans = 0
        zero = k
        length = len(nums)
        while r < length:
            if nums[r] == 0:
                zero -= 1
            while zero < 0:
                if nums[l] == 0:
                    zero += 1
                l += 1
            ans = max(ans, r-l+1)
            r += 1

        return ans
