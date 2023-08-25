class Solution:
    def dailyTemperatures(self, temperatures: List[int]) -> List[int]:
        nextArr = [0 for _ in range(len(temperatures))]
        stack = []
        for index in range(len(temperatures)):
            while len(stack) != 0 and temperatures[index] > temperatures[stack[len(stack)-1]]:
                i = stack.pop()
                nextArr[i] = index - i
            stack.append(index)

        return nextArr
