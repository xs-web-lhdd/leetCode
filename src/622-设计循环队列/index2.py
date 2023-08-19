class MyCircularQueue:
    """
    链式结构的循环队列
    """

    def __init__(self, k: int):
        # 头尾节点均是 None
        self.head = self.tail = None
        # 链表容量是 k
        self.capacity = k
        # 链表长度为 0
        self.length = 0

    def enQueue(self, value: int) -> bool:
        if self.isFull():
            return False
        node = ListNode(value)
        if self.head is None:
            self.head = node
            self.tail = node
        else:
            self.tail.next = node
            self.tail = node
        self.length += 1
        return True

    def deQueue(self) -> bool:
        if self.isEmpty():
            return False
        self.head = self.head.next
        self.length -= 1
        return True

    def Front(self) -> int:
        return -1 if self.isEmpty() else self.head.val

    def Rear(self) -> int:
        return -1 if self.isEmpty() else self.tail.val

    def isEmpty(self) -> bool:
        return self.length == 0

    def isFull(self) -> bool:
        return self.length == self.capacity


# Your MyCircularQueue object will be instantiated and called as such:
# obj = MyCircularQueue(k)
# param_1 = obj.enQueue(value)
# param_2 = obj.deQueue()
# param_3 = obj.Front()
# param_4 = obj.Rear()
# param_5 = obj.isEmpty()
# param_6 = obj.isFull()
