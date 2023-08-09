# Definition for singly-linked list.
class ListNode:
    def __init__(self, val=0, next=None):
        self.val = val
        self.next = next


class Solution:
    def partition(self, head: [ListNode], x: int) -> [ListNode]:
        if not head:
            return head
        smallList = Node()
        bigList = Node()
        cur = head
        s = smallList
        b = bigList
        while cur:
            val = cur.val
            if val < x:
                s.next = cur
                s = cur
                cur = cur.next
                s.next = None
            else:
                b.next = cur
                b = cur
                cur = cur.next
                b.next = None

        s.next = bigList.next

        return smallList.next


class Node:
    def __init__(self, val=0, next=None):
        self.val = val
        self.next = next


# 测试代码：
list = [1, 4, 3, 2, 5, 2]
k = 3

head = Node()
cur = head
for i, num in enumerate(list):
    print('i -----》》》》》', num)
    cur.next = ListNode(num)
    cur = cur.next

print(head.next)


s = Solution()
result = s.partition(head.next, k)

pre = result
while pre:
    print(pre.val)
    pre = pre.next
