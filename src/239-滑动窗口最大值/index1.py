class Solution:
    def maxSlidingWindow(self, nums: List[int], k: int) -> List[int]:
        queue = collections.deque()
        res = []
        for index in range(len(nums)):
            while len(queue) != 0 and (nums[index] > nums[queue[len(queue)-1]]):
                queue.pop()
            queue.append(index)
            if index - queue[0] == k:
                queue.popleft()
            if index + 1 < k:
                continue
            res.append(nums[queue[0]])

        return res
