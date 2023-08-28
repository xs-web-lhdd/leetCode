class Solution:
    def rob(self, nums: List[int]) -> int:
        if len(nums) == 1:
            return nums[0]
        if len(nums) == 2:
            return max(nums[0], nums[1])

        # 不偷最后一家的 lastArr
        lastArr = [
            [0, 0] for _ in range(len(nums)-1)
        ]
        lastArr[0][0] = 0
        lastArr[0][1] = nums[0]

        for index in range(1, len(nums)-1):
            lastArr[index][0] = max(lastArr[index-1][0], lastArr[index-1][1])
            lastArr[index][1] = lastArr[index-1][0] + nums[index]
        # 不偷最后一家：
        lastVal = max(lastArr[len(lastArr)-1][0], lastArr[len(lastArr)-1][1])

        # 不偷第一家的 firstArr
        firstArr = [
            [0, 0] for _ in range(len(nums)-1)
        ]
        firstArr[0][0] = 0
        firstArr[0][1] = nums[1]
        for index in range(2, len(nums)):
            firstArr[index-1][0] = max(
                firstArr[index-2][0], firstArr[index-2][1])
            firstArr[index-1][1] = firstArr[index-2][0] + nums[index]
        # 不偷第一家得到的最大值：
        firstVal = max(firstArr[len(firstArr)-1][0],
                       firstArr[len(firstArr)-1][1])

        return max(firstVal, lastVal)
