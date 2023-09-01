class Solution:
    def shortestSubarray(self, nums: List[int], k: int) -> int:
        """
        这种方式使用前缀和 + 单调队列，平均时间复杂度是 O(nlogn)
        """
        # 1、前缀和
        pre = [
            0 for _ in range(len(nums) + 1)
        ]
        for i in range(len(nums)):
            pre[i+1] = pre[i] + nums[i]

        ans = -1
        pos = -1
        q = [0]
        # 单调递增队列
        for i in range(1, len(pre)):
            while len(q) and pre[i] - pre[q[0]] >= k:
                pos = q[0]
                q.pop(0)
            if pos != -1 and (i - pos < ans or ans == -1):
                ans = i - pos
            while len(q) and pre[i] < pre[q[len(q)-1]]:
                q.pop()
            q.append(i)

        return ans
