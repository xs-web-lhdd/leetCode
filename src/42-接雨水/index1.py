class Solution:
    def trap(self, height: List[int]) -> int:
        preArr_p = [-1 for _ in range(len(height))]
        nextArr_p = [-1 for _ in range(len(height))]
        stack_p = []
        for index in range(len(height)):
            while len(stack_p) and height[index] > height[stack_p[len(stack_p)-1]]:
                i = stack_p.pop()
                nextArr_p[i] = index
            if len(stack_p):
                preArr_p[index] = stack_p[len(stack_p)-1]
            stack_p.append(index)

        preArr_q = [-1 for _ in range(len(height))]
        nextArr_q = [-1 for _ in range(len(height))]
        stack_q = []
        for index in range(len(height)):
            while len(stack_q) and height[index] >= height[stack_q[len(stack_q)-1]]:
                i = stack_q.pop()
                nextArr_q[i] = index
            if len(stack_q):
                preArr_q[index] = stack_q[len(stack_q)-1]
            stack_q.append(index)

        ans_p = 0
        ans_q = 0

        for index in range(len(height)):
            if preArr_p[index] != -1 and nextArr_p[index] != -1:
                leftHeight = height[preArr_p[index]]
                rightHeight = height[nextArr_p[index]]
                currentHeight = height[index]
                width = nextArr_p[index] - preArr_p[index] - 1
                ans_p += (min(leftHeight, rightHeight) - currentHeight) * width

            if preArr_q[index] != -1 and nextArr_q[index] != -1:
                leftHeight = height[preArr_q[index]]
                rightHeight = height[nextArr_q[index]]
                currentHeight = height[index]
                width = nextArr_q[index] - preArr_q[index] - 1
                ans_q += (min(leftHeight, rightHeight) - currentHeight) * width

        return (ans_p + ans_q) // 2
