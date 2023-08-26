class Solution:
    def trap(self, height: List[int]) -> int:
        # preArr = [-1 for _ in range(len(height))]
        # nextArr = [len(height) for _ in range(len(height))]
        stack = []
        ans = 0
        for index in range(len(height)):
            while len(stack) and height[index] > height[stack[len(stack)-1]]:
                i = stack.pop()
                if len(stack) == 0:
                    break
                left = stack[len(stack)-1]
                leftHeight = height[left]
                rightHeight = height[index]
                bottomHeight = height[i]
                width = index - left - 1
                area = (min(leftHeight, rightHeight) - bottomHeight) * width

                ans += area

            stack.append(index)

        return ans
