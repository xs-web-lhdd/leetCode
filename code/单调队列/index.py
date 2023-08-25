# 单调队列模板代码演示：

class MonotonicQueue:
    def getMax(self, arr, k):
        # 构造单调递减序列
        print(f'原数组是：{arr}，滑动窗口大小是：{k}\n')
        # 存储的都是下标：
        queue = []
        for index in range(len(arr)):
            while len(queue) != 0 and (arr[index] > arr[queue[len(queue)-1]]):
                queue.pop()
            queue.append(index)
            if index - queue[0] == k:
                queue.pop(0)
            if index + 1 < k:
                continue
            print(f"当前{index+2-k}-{index+1}窗口最大值：{arr[queue[0]]}")

    def getMin(self, arr, k):
        # 构造单调递增序列
        print(f'原数组是：{arr}，滑动窗口大小是：{k}\n')
        # 存储的都是下标：
        queue = []
        for index in range(len(arr)):
            while len(queue) != 0 and (arr[index] < arr[queue[len(queue)-1]]):
                queue.pop()
            queue.append(index)
            if index - queue[0] == k:
                queue.pop(0)
            if index + 1 < k:
                continue
            print(f"当前{index+2-k}-{index+1}窗口最小值：{arr[queue[0]]}")


rmq = MonotonicQueue()


n, k = (input('请输入数组长度和滑动窗口的长度，用空格分开：').split())
n = int(n)
k = int(k)
lst = [0 for _ in range(n)]

for index in range(n):
    val = input(f'请输入数组中第 {index+1} 个元素：')
    val = int(val)
    lst[index] = val

print('Input is done！')

rmq.getMin(lst, k)
rmq.getMax(lst, k)
