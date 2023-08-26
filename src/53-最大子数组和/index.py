class Solution:
    def maxSubArray(self, nums: List[int]) -> int:
        arr = [0 for _ in range(len(nums)+1)]
        for index in range(1, len(nums)+1):
            arr[index] = arr[index-1] + nums[index-1]

        arr.pop(0)
        pre = 0
        ans = -100000
        for index in range(len(arr)):
            ans = max(arr[index]-pre, ans)
            pre = min(arr[index], pre)

        return ans
