class Solution:
    def largestRectangleArea(self, heights: List[int]) -> int:
        preArr = [-1 for _ in range(len(heights))]
        nextArr = [len(heights) for _ in range(len(heights))]
        stack = []
        for index in range(len(heights)):
            while len(stack) != 0 and heights[index] < heights[stack[len(stack)-1]]:
                i = stack.pop()
                nextArr[i] = index
            if len(stack):
                preArr[index] = stack[len(stack)-1]
            stack.append(index)

        # 存储面积
        res = [0 for _ in range(len(heights))]
        for index in range(len(res)):
            res[index] = heights[index] * (nextArr[index] - preArr[index] - 1)

        return max(res)
