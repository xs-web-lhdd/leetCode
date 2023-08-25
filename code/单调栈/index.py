"""
单调栈模板代码演示：
"""


class MonotonicStack:
    def getMax(self, arr):
        preArr = [-1 for _ in range(len(arr))]
        nextArr = [-1 for _ in range(len(arr))]
        stack = []
        for index in range(len(arr)):
            while len(stack) != 0 and arr[index] > arr[stack[len(stack)-1]]:
                i = stack.pop()
                nextArr[i] = index
            if len(stack):
                preArr[index] = stack[len(stack)-1]
            stack.append(index)
        print(f'原数组：{arr}')
        print(f"原数组下标：{[i for i in range(len(arr))]}")
        print(f'数组中离元素自身最大的前边元素下标：{preArr}')
        print(f'数组中离元素自身最大的后边元素下标：{nextArr}')


stack = MonotonicStack()

n = input('请输入数组长度：')
n = int(n)

lst = [0 for _ in range(n)]

for index in range(n):
    val = input(f'请输入数组中第 {index+1} 个元素：')
    val = int(val)
    lst[index] = val

print('Input is done！\n')

# stack.getMin(lst)
stack.getMax(lst)
