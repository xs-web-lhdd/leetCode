class Solution:
    def shortestSubarray(self, nums: List[int], k: int) -> int:
        """
        这种方式只使用前缀和，时间复杂度是 O(n**2)
        """
        # 1、前缀和
        pre = [
            0 for _ in range(len(nums) + 1)
        ]
        for i in range(len(nums)):
            pre[i+1] = pre[i] + nums[i]

        ans = 10000
        for i in range(1, len(pre)):
            for j in range(i):
                if pre[i] - pre[j] >= k:
                    ans = min(ans, i-j)

        return -1 if ans == 10000 else ans
