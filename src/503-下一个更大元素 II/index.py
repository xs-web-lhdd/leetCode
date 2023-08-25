class Solution:
    def nextGreaterElements(self, nums: List[int]) -> List[int]:
        arr = nums + nums
        nextArr = [-1 for _ in range(len(arr))]
        stack = []
        for index in range(len(arr)):
            while len(stack) != 0 and arr[index] > arr[stack[len(stack)-1]]:
                i = stack.pop()
                nextArr[i] = index
            stack.append(index)

        res = []
        for i in nextArr:
            if i == -1:
                res.append(-1)
            else:
                res.append(arr[i])
        return res[0:len(nums)]
