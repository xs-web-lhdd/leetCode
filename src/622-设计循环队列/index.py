class MyCircularQueue:
    """
    顺序结构的循环队列
    """

    def __init__(self, k: int):
        self.queue = [None for _ in range(k+1)]
        self.front = 0
        self.rera = 0
        self.length = k + 1

    def enQueue(self, value: int) -> bool:
        if self.isFull():
            return False
        self.queue[self.rera] = value
        if self.rera == self.length - 1:
            self.rera = 0
        else:
            self.rera += 1
        return True

    def deQueue(self) -> bool:
        if self.isEmpty():
            return False
        self.queue[self.rera] = None
        if self.front == self.length - 1:
            self.front = 0
        else:
            self.front += 1
        return True

    def Front(self) -> int:
        if self.isEmpty():
            return -1
        return self.queue[self.front]

    def Rear(self) -> int:
        if self.isEmpty():
            return -1
        index = self.rera - 1 % self.length
        return self.queue[index]

    def isEmpty(self) -> bool:
        if self.front == self.rera:
            return True
        else:
            return False

    def isFull(self) -> bool:
        if (self.rera + 1) % self.length == self.front:
            return True
        else:
            return False


# Your MyCircularQueue object will be instantiated and called as such:
# obj = MyCircularQueue(k)
# param_1 = obj.enQueue(value)
# param_2 = obj.deQueue()
# param_3 = obj.Front()
# param_4 = obj.Rear()
# param_5 = obj.isEmpty()
# param_6 = obj.isFull()
