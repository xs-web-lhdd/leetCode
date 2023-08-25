class Solution:
    def maxSumMinProduct(self, nums: List[int]) -> int:
        preArr = [-1 for _ in range(len(nums))]
        nextArr = [len(nums) for _ in range(len(nums))]
        stack = []
        for index in range(len(nums)):
            while len(stack) != 0 and nums[index] < nums[stack[len(stack)-1]]:
                i = stack.pop()
                nextArr[i] = index
            if len(stack):
                preArr[index] = stack[len(stack)-1]
            stack.append(index)

        # 前缀和
        sum = [0 for _ in range(len(nums)+1)]
        for index in range(len(nums)):
            sum[index+1] = sum[index] + nums[index]

        max_num = 0

        for index in range(len(nums)):
            val = nums[index] * (sum[nextArr[index]] - sum[preArr[index] + 1])
            if max_num < val:
                max_num = val

        return max_num % 1000000007
